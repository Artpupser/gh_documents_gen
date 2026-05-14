import {useMemo, useState} from "react";
import CodeOfConductGenerator from "../utils/CodeOfConduct";
import Label from "../components/Label.tsx";
import Checkbox from "../components/Checkbox.tsx";
import CopyButton from "../components/CopyButton.tsx";
import DownloadButton from "../components/DownloadButton.tsx";

const CodeOfConduct = () => {
  const [name, setName] = useState("");
  const [openSource, setOpenSource] = useState(true);

  const safeName = name.trim() || "Project Name";

  const result = useMemo(() => {
    return CodeOfConductGenerator(safeName, openSource);
  }, [safeName, openSource]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">'CODE_OF_CONDUCT' generator</h1>

      <div className="grid gap-4">
        <div className="grid grid-rows-1 grid-cols-1 gap-1">
          <Label
            name="Project name"
            holder="Project name"
            getter={() => name}
            setter={setName}/>
        </div>

        <Checkbox name='Open source project' getter={() => openSource} setter={setOpenSource}/>

        <div className="flex flex-row gap-1">
          <CopyButton content={result}/>
          <DownloadButton name={"CODE_OF_CONDUCT"} extension={"md"} content_in_file={result}/>
        </div>
      </div>

      <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md border">
        {result}
      </pre>
    </div>
  );
};

export default CodeOfConduct;
