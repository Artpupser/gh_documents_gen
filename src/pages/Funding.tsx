import { useMemo, useState } from "react";

import {
  FaGithub,
  FaPatreon,
  FaCoffee,
  FaDonate,
} from "react-icons/fa";

import {
  SiOpencollective,
  SiKofi,
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

const customProviders: CustomProvider[] = [
  {
    name: "DonationAlerts",
    logo: FaDonate,
    prefix: "https://www.donationalerts.com/r/",
  },
];

const Funding = () => {
  const [github, setGithub] = useState("");

  const [patreon, setPatreon] = useState("");
  const [openCollective, setOpenCollective] = useState("");
  const [tidelift, setTidelift] = useState("");
  const [koFi, setKoFi] = useState("");
  const [polar, setPolar] = useState("");
  const [communityBridge, setCommunityBridge] = useState("");
  const [buyMeACoffee, setBuyMeACoffee] = useState("");
  const [liberapay, setLiberapay] = useState("");
  const [otechie, setOtechie] = useState("");

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

      patreon: patreon || null,
      open_collective: openCollective || null,
      tidelift: tidelift || null,
      ko_fi: koFi || null,
      polar: polar || null,
      community_bridge: communityBridge || null,
      buy_me_a_coffee: buyMeACoffee || null,
      liberapay: liberapay || null,
      otechie: otechie || null,

      custom,
    };
  }, [
    github,
    patreon,
    openCollective,
    tidelift,
    koFi,
    polar,
    communityBridge,
    buyMeACoffee,
    liberapay,
    otechie,
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
        FUNDING.yml Generator
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

          <div className="flex items-end gap-2">
            <FaPatreon className="w-5 h-5 mb-3 text-gray-700" />

            <div className="w-full">
              <Label
                name="Patreon"
                holder={placeholder}
                getter={() => patreon}
                setter={setPatreon}
              />
            </div>
          </div>

          <div className="flex items-end gap-2">
            <SiOpencollective className="w-5 h-5 mb-3 text-gray-700" />

            <div className="w-full">
              <Label
                name="Open Collective"
                holder={placeholder}
                getter={() => openCollective}
                setter={setOpenCollective}
              />
            </div>
          </div>

          <Label
            name="Tidelift"
            holder={placeholder}
            getter={() => tidelift}
            setter={setTidelift}
          />

          <div className="flex items-end gap-2">
            <SiKofi className="w-5 h-5 mb-3 text-gray-700" />

            <div className="w-full">
              <Label
                name="Ko-fi"
                holder={placeholder}
                getter={() => koFi}
                setter={setKoFi}
              />
            </div>
          </div>

          <Label
            name="Polar"
            holder={placeholder}
            getter={() => polar}
            setter={setPolar}
          />

          <Label
            name="Community Bridge"
            holder={placeholder}
            getter={() => communityBridge}
            setter={setCommunityBridge}
          />

          <div className="flex items-end gap-2">
            <FaCoffee className="w-5 h-5 mb-3 text-gray-700" />

            <div className="w-full">
              <Label
                name="Buy Me a Coffee"
                holder={placeholder}
                getter={() => buyMeACoffee}
                setter={setBuyMeACoffee}
              />
            </div>
          </div>

          <div className="flex items-end gap-2">
            <SiLiberapay className="w-5 h-5 mb-3 text-gray-700" />

            <div className="w-full">
              <Label
                name="Liberapay"
                holder={placeholder}
                getter={() => liberapay}
                setter={setLiberapay}
              />
            </div>
          </div>

          <Label
            name="Otechie"
            holder={placeholder}
            getter={() => otechie}
            setter={setOtechie}
          />
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
