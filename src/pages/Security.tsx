import { useMemo, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import SecurityGenerator from "../utils/Security";

import Label from "../components/Label";
import CopyButton from "../components/CopyButton";
import DownloadButton from "../components/DownloadButton";

const Security = () => {
  const [responseTime, setResponseTime] = useState("48-72 hours");

  const [versions, setVersions] = useState<[string, boolean][]>([
    ["latest", true],
  ]);

  const updateVersion = (
    index: number,
    field: "version" | "supported",
    value: string | boolean
  ) => {
    setVersions((prev) => {
      const updated = [...prev];

      if (field === "version") {
        updated[index][0] = value as string;
      }

      if (field === "supported") {
        updated[index][1] = value as boolean;
      }

      return updated;
    });
  };

  const addVersion = () => {
    setVersions((prev) => [
      ...prev,
      ["", false],
    ]);
  };

  const removeVersion = (index: number) => {
    setVersions((prev) =>
      prev.filter((_, i) => i !== index)
    );
  };

  const securityText = useMemo(() => {
    return SecurityGenerator({
      versions: versions.filter(
        (v) => v[0].trim() !== ""
      ),

      responseTime,
    });
  }, [versions, responseTime]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        'SECURITY' generator
      </h1>

      <div className="grid gap-4">
        <Label
          name="Response Time"
          holder="48 hours"
          getter={() => responseTime}
          setter={setResponseTime}
        />

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Supported Versions
            </h2>

            <button
              onClick={addVersion}
              className="
                flex
                items-center
                gap-2
                rounded-md
                border
                border-gray-300
                px-3
                py-2
                hover:bg-gray-100
                transition
              "
            >
              <FaPlus />

              Add version
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {versions.map((item, index) => (
              <div
                key={index}
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-[1fr_220px_60px]
                  gap-3
                  items-center
                "
              >
                <input
                  type="text"
                  value={item[0]}
                  placeholder="1.x.x"
                  onChange={(e) => {
                    updateVersion(
                      index,
                      "version",
                      e.target.value
                    );
                  }}
                  className="
                    w-full
                    rounded-md
                    border
                    border-gray-300
                    px-3
                    py-2
                    outline-none
                    focus:ring-2
                    focus:ring-gray-400
                  "
                />

                <select
                  value={item[1] ? "true" : "false"}
                  onChange={(e) => {
                    updateVersion(
                      index,
                      "supported",
                      e.target.value === "true"
                    );
                  }}
                  className="
                    w-full
                    rounded-md
                    border
                    border-gray-300
                    px-3
                    py-2
                    outline-none
                    focus:ring-2
                    focus:ring-gray-400
                  "
                >
                  <option value="true">
                    ✅ Supported
                  </option>

                  <option value="false">
                    ❌ Unsupported
                  </option>
                </select>

                <button
                  onClick={() => removeVersion(index)}
                  className="
                    flex
                    items-center
                    justify-center
                    rounded-md
                    border
                    p-3
                    transition
                  "
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <CopyButton content={securityText} />

          <DownloadButton
            name={"SECURITY"}
            extension={"md"}
            content_in_file={securityText}
          />
        </div>
      </div>

      <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md border overflow-x-auto">
        {securityText}
      </pre>
    </div>
  );
};

export default Security;
