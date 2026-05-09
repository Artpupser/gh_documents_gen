import { useMemo, useState } from "react";

import Mit from "../utils/licenses/Mit";
import Apache from "../utils/licenses/Apache";
import GnuGpl3 from "../utils/licenses/GnuGpl3";
import Checkbox from "../components/Checkbox.tsx";
import Label from "../components/Label.tsx";
import CopyButton from "../components/CopyButton.tsx";
import DownloadButton from "../components/DownloadButton.tsx";

type LicenseData = {
  year: string;
  holder: string;
};

type LicenseItem = {
  id: string;
  name: string;
  generate: (data: LicenseData) => string;
};

const LICENSES: LicenseItem[] = [
  {
    id: "mit",
    name: "MIT License",
    generate: ({ year, holder }) => Mit(year, holder),
  },
  {
    id: "apache",
    name: "Apache License 2.0",
    generate: ({ year }) => Apache(year),
  },
  {
    id: "gpl",
    name: "GNU GPL v3",
    generate: ({ year }) => GnuGpl3(year),
  },
];

const License = () => {
  const currentYear = new Date().getFullYear();

  const [year, setYear] = useState(String(currentYear));
  const [author, setAuthor] = useState("");
  const [selected, setSelected] = useState<string[]>(["mit"]);

  const data: LicenseData = {
    year: year.trim() || String(currentYear),
    holder: author.trim() || "Your Name",
  };

  const licenseText = useMemo(() => {
    return LICENSES
      .filter((l) => selected.includes(l.id))
      .map((l) => l.generate(data))
      .join("\n\n---\n\n");
  }, [selected, data]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">'License' generator</h1>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Licenses</h2>

        {LICENSES.map((l) => (
          <Checkbox name={l.name} getter={() => selected.includes(l.id)} setter={() => toggle(l.id)} />
        ))}
      </div>

      <div className="grid gap-4">
        <div className="grid grid-rows-1 grid-cols-2 gap-1">
          <Label name="Year" holder="Year" getter={() => year} setter={setYear}/>
          <Label name="Copyright author" holder="Author" getter={() => author} setter={setAuthor}/>
        </div>
        <div className="flex flex-row gap-1">
          <CopyButton content={licenseText}/>
          <DownloadButton name={"LICENSE"} extension={""} content_in_file={licenseText}/>
        </div>
      </div>

      <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md border">
        {licenseText}
      </pre>
    </div>
  );
}

export default License;
