
const Contributing = (props: {
  projectName: string;
  introMessage: string;
  aboutProject: string;
  howToContribute: string[];
  codeOfConductUrl?: string;
  issueTypes?: Array<{name: string; template: string}>;
  pullRequestGuidelines: string[];
  codingStandards: string;
  testingInstructions: string;
  commitMessageFormat: string;
  branchNaming: string;
  contactInfo: string;
  licenses: string[];
}): string => {
  let md = `# Contributing to ${props.projectName}\n\n`;
  md += `${props.introMessage}\n\n`;
  md += `## About the Project\n\n${props.aboutProject}\n\n`;

  md += `## How to Contribute\n\n`;
  md += props.howToContribute.map((step, i) => `${i + 1}. ${step}`).join('\n');
  md += '\n\n';

  if (props.codeOfConductUrl) {
    md += `## Code of Conduct\n\nPlease read our [Code of Conduct](${props.codeOfConductUrl}) before contributing.\n\n`;
  }

  if (props.issueTypes && props.issueTypes.length > 0) {
    md += `## Reporting Issues\n\nWe use the following issue templates:\n\n`;
    props.issueTypes.forEach(issue => {
      md += `- **${issue.name}**: Use the [\`${issue.template}\`](.github/ISSUE_TEMPLATE/${issue.template}) template\n`;
    });
    md += '\n';
  }

  md += `## Pull Request Guidelines\n\nWhen opening a PR, please:\n\n`;
  md += props.pullRequestGuidelines.map(line => `- ${line}`).join('\n');
  md += '\n\n';

  md += `## Coding Standards\n\n${props.codingStandards}\n\n`;
  md += `## Testing\n\n${props.testingInstructions}\n\n`;
  md += `## Commit Messages\n\n${props.commitMessageFormat}\n\n`;
  md += `## Branch Naming\n\n${props.branchNaming}\n\n`;
  md += `## Contact\n\n${props.contactInfo}\n\n`;
  md += `## License\n\n`;
  md += `This project is licensed under the ${props.licenses.map((item) => item).join(',')} License`
  md += `\n`;

  return md;
}

export default Contributing;
