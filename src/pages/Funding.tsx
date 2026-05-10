import { useMemo, useState } from "react";

import {
  FaGithub,
  FaDonate,
} from "react-icons/fa";

import {
  SiKofi,
  SiPatreon,
  SiOpencollective,
  SiLiberapay,
} from "react-icons/si";

import type { IconType } from "react-icons";

import Label from "../components/Label";
import CopyButton from "../components/CopyButton";
import DownloadButton from "../components/DownloadButton";

import FundingGenerator, {
  type FundingObject,
} from "../utils/Funding";

type CustomProvider = {
  name: string;
  logo: IconType;
  prefix: string;
};

type BuiltinProvider = {
  name: string;
  icon: IconType;
  service: string;
}


const builtinProviders: BuiltinProvider[] = [
  {
    name: "Ko-fi",
    icon: SiKofi,
    service: "ko-fi",
  },
  {
    name: "Patreon",
    icon: SiPatreon,
    service: "patreon",
  },
  {
    name: "Open Collective",
    icon: SiOpencollective,
    service: "open_collective",
  },
  {
    name: "Tidelift",
    icon: FaDonate,
    service: "tidelift",
  },
  {
    name: "Polar",
    icon: FaDonate,
    service: "polar",
  },
  {
    name: "Community Bridge",
    icon: FaDonate,
    service: "community_bridge",
  },
  {
    name: "Buy Me a Coffee",
    icon: FaDonate,
    service: "buy_me_a_coffee",
  },
  {
    name: "Liberapay",
    icon: SiLiberapay,
    service: "liberapay",
  },
  {
    name: "Otechie",
    icon: FaDonate,
    service: "otechie",
  },
];
const customProviders: CustomProvider[] = [
  {
    name: "DonationAlerts",
    logo: FaDonate,
    prefix: "https://www.donationalerts.com/r/",
  },
];

const Funding = () => {
  const [github, setGithub] = useState("");
  const [builtin, setBuiltin] = useState<[string, string][]>(
    builtinProviders.map((item: BuiltinProvider) => [item.service,""])
  );
  const [customValues, setCustomValues] = useState<string[]>(
    customProviders.map(() => "")
  );

  const fundingObject: FundingObject = useMemo(() => {
    const custom = customProviders
      .map((provider, index) => {
        const value = customValues[index]?.trim();

        if (!value) {
          return null;
        }

        return `${provider.prefix}${value}`;
      })
      .filter(Boolean) as string[];

    return {
      github: github
        .split(",")
        .map(x => x.trim())
        .filter(Boolean),
      builtin: builtin,
      custom,
    };
  }, [
    github,
    builtin,
    customValues,
  ]);

  const fundingText = useMemo(() => {
    return FundingGenerator({
      funding: fundingObject,
    });
  }, [fundingObject]);

  const placeholder = "Name";

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        'Funding' generator
      </h1>

      <div className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex items-end gap-2">
            <FaGithub className="w-5 h-5 mb-3 text-gray-700" />

            <div className="w-full">
              <Label
                name="GitHub"
                holder="user1, user2"
                getter={() => github}
                setter={setGithub}
              />
            </div>
          </div>

          ${builtinProviders.map((item: BuiltinProvider, index: number) => {
            const Icon = item.icon;
            return (
            <div className="flex items-end gap-2">
              <Icon className="w-5 h-5 mb-3 text-gray-700" />

              <div className="w-full">
                <Label
                  name={item.name}
                  holder={placeholder}
                  getter={() => builtin[index][1]}
                  setter={(v:string) => setBuiltin((prev) => {
                    const updated = [...prev];
                    updated[index][1] = v;
                    updated[index][0] = item.service;
                    return updated;
                  })}
                />
              </div>
            </div>
          )})}


        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold">
            Custom Providers
          </h2>

          {customProviders.map((provider, index) => {
            const Icon = provider.logo;

            return (
              <div
                key={provider.name}
                className="flex items-end gap-2"
              >
                <Icon className="w-5 h-5 mb-3 text-gray-700" />

                <div className="w-full">
                  <Label
                    name={provider.name}
                    holder={placeholder}
                    getter={() => customValues[index] || ""}
                    setter={(value) => {
                      setCustomValues((prev) => {
                        const updated = [...prev];
                        updated[index] = value;
                        return updated;
                      });
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-row gap-2">
          <CopyButton content={fundingText} />

          <DownloadButton
            name={"FUNDING"}
            extension={"yml"}
            content_in_file={fundingText}
          />
        </div>
      </div>

      <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md border overflow-x-auto">
        {fundingText}
      </pre>
    </div>
  );
};

export default Funding;
