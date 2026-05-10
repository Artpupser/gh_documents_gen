import {useMemo, useState} from "react";

import Label from "../components/Label";
import CopyButton from "../components/CopyButton";
import DownloadButton from "../components/DownloadButton";

import ContributingGenerator from "../utils/Contributing";

const Contributing = () => {
  const [projectName, setProjectName] = useState("");
  const [introMessage, setIntroMessage] = useState("");
  const [aboutProject, setAboutProject] = useState("");
  const [howToContribute, setHowToContribute] = useState("");
  const [codeOfConductUrl, setCodeOfConductUrl] = useState("");

  const [issueBug, setIssueBug] = useState(true);
  const [issueFeature, setIssueFeature] = useState(true);

  const [pullRequestGuidelines, setPullRequestGuidelines] = useState("");
  const [codingStandards, setCodingStandards] = useState("");
  const [testingInstructions, setTestingInstructions] = useState("");
  const [commitMessageFormat, setCommitMessageFormat] = useState("");
  const [branchNaming, setBranchNaming] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const [licenses, setLicenses] = useState<string[]>(["MIT"]);

  const toggleLicense = (license: string) => {
    setLicenses((prev) => {
      if (prev.includes(license)) {
        return prev.filter((item) => item !== license);
      }

      return [...prev, license];
    });
  };

  const contributingText = useMemo(() => {
    return ContributingGenerator({
      projectName,
      introMessage,
      aboutProject,

      howToContribute: howToContribute
        .split("\n")
        .filter(Boolean),

      codeOfConductUrl,

      issueTypes: [
        ...(issueBug
          ? [
            {
              name: "Bug Report",
              template: "bug_report.yml",
            },
          ]
          : []),

        ...(issueFeature
          ? [
            {
              name: "Feature Request",
              template: "feature_request.yml",
            },
          ]
          : []),
      ],

      pullRequestGuidelines: pullRequestGuidelines
        .split("\n")
        .filter(Boolean),

      codingStandards,
      testingInstructions,
      commitMessageFormat,
      branchNaming,
      contactInfo,
      licenses,
    });
  }, [
    projectName,
    introMessage,
    aboutProject,
    howToContribute,
    codeOfConductUrl,
    issueBug,
    issueFeature,
    pullRequestGuidelines,
    codingStandards,
    testingInstructions,
    commitMessageFormat,
    branchNaming,
    contactInfo,
    licenses,
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        'CONTRIBUTING' generator
      </h1>

      <div className="grid gap-4">
        <Label
          name="Project Name"
          holder="MyProject"
          getter={() => projectName}
          setter={setProjectName}
        />

        <Label
          name="Intro Message"
          holder="Thank you for contributing..."
          getter={() => introMessage}
          setter={setIntroMessage}
          textarea
        />

        <Label
          name="About Project"
          holder="This project does..."
          getter={() => aboutProject}
          setter={setAboutProject}
          textarea
        />

        <Label
          name="How To Contribute"
          holder={"Fork repository\nCreate branch\nOpen PR"}
          getter={() => howToContribute}
          setter={setHowToContribute}
          textarea
        />

        <Label
          name="Code Of Conduct URL"
          holder="https://github.com/user/repo/CODE_OF_CONDUCT.md"
          getter={() => codeOfConductUrl}
          setter={setCodeOfConductUrl}
        />

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">
            Issue Templates
          </h2>

          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={issueBug}
                onChange={() => setIssueBug(!issueBug)}
              />

              Bug Report
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={issueFeature}
                onChange={() => setIssueFeature(!issueFeature)}
              />

              Feature Request
            </label>
          </div>
        </div>

        <Label
          name="Pull Request Guidelines"
          holder={"Describe changes\nAdd tests\nKeep commits clean"}
          getter={() => pullRequestGuidelines}
          setter={setPullRequestGuidelines}
          textarea
        />

        <Label
          name="Coding Standards"
          holder="Use ESLint and Prettier"
          getter={() => codingStandards}
          setter={setCodingStandards}
          textarea
        />

        <Label
          name="Testing Instructions"
          holder="Run npm test"
          getter={() => testingInstructions}
          setter={setTestingInstructions}
          textarea
        />

        <Label
          name="Commit Message Format"
          holder="feat: add new feature"
          getter={() => commitMessageFormat}
          setter={setCommitMessageFormat}
        />

        <Label
          name="Branch Naming"
          holder="feature/my-feature"
          getter={() => branchNaming}
          setter={setBranchNaming}
        />

        <Label
          name="Contact Info"
          holder="dev@example.com"
          getter={() => contactInfo}
          setter={setContactInfo}
        />

        <div className="space-y-2">
          <h2 className="text-lg font-semibold">
            License
          </h2>

          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={licenses.includes("MIT")}
                onChange={() => toggleLicense("MIT")}
              />

              MIT
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={licenses.includes("Apache")}
                onChange={() => toggleLicense("Apache")}
              />

              Apache
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={licenses.includes("GPL")}
                onChange={() => toggleLicense("GPL")}
              />

              GPL
            </label>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <CopyButton content={contributingText}/>

          <DownloadButton
            name={"CONTRIBUTING"}
            extension={"md"}
            content_in_file={contributingText}
          />
        </div>
      </div>

      <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md border overflow-x-auto">
        {contributingText}
      </pre>
    </div>
  );
};

export default Contributing;
