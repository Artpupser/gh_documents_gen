import { useMemo, useState } from "react";
import CodeOfConductGenerator from "../utils/CodeOfConduct";
import Label from "../components/Label.tsx";
import Checkbox from "../components/Checkbox.tsx";
import CopyButton from "../components/CopyButton.tsx";

const CodeOfConduct = () => {
  const [name, setName] = useState("");
  const [version, setVersion] = useState("");
  const [openSource, setOpenSource] = useState(true);

  const safeName = name.trim() || "Project Name";
  const safeVersion = version.trim() || null;

  const result = useMemo(() => {
    return CodeOfConductGenerator(safeName, safeVersion, openSource);
  }, [safeName, safeVersion, openSource]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Code of Conduct Generator</h1>

      <div className="grid gap-4">
        <Label
          name="Project name"
          holder="Project name"
          getter={() => name}
          setter={setName} />
        <Label
          name="Version (optional, default='latest')"
          holder="1.x.x"
          getter={() => version}
          setter={setVersion} />

        <Checkbox name='Open source project' getter={() => openSource} setter={setOpenSource} />
        <CopyButton content={result} />
      </div>

       <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md border">
        {result}
      </pre>
    </div>
  );
};

export default CodeOfConduct;
