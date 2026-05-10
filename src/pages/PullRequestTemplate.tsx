import CopyButton from "../components/CopyButton.tsx";
import DownloadButton from "../components/DownloadButton.tsx";

const PullRequestTemplate = () => {
  const template: string = `# Pull Request

## Description
What does this PR do and why?

<!-- Describe your changes clearly and explain the purpose -->

## Related Issue
<!-- Reference the issue (e.g., Closes #123) -->

Closes #

## Type of Change
<!-- Select all that apply -->

- [ ] Bug fix
- [ ] New feature
- [ ] Refactoring
- [ ] Documentation update
- [ ] Security improvement
- [ ] Performance improvement

## How Has This Been Tested?
<!-- Select all platforms you tested on -->

- [ ] Linux
- [ ] Windows
- [ ] macOS

## Commands Used to Test
<!-- Paste the commands you used to test -->

\`\`\`bash
# Your test commands here
\`\`\`

## Checklist
<!-- Ensure all items are checked before merging -->

- [ ] Code follows the project's style guidelines
- [ ] README updated if needed
- [ ] No new security vulnerabilities introduced

## Screenshots / Output
<!-- Attach terminal output or before/after screenshots -->

<!-- Paste screenshots here -->`

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        'PULL_REQUEST_TEMPLATE' template
      </h1>

      <div className="grid gap-4">

        <div className="flex flex-row gap-2">
          <CopyButton content={template}/>

          <DownloadButton
            name={"PULL_REQUEST_TEMPLATE"}
            extension={"md"}
            content_in_file={template}
          />
        </div>
      </div>

      <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md border overflow-x-auto">
        {template}
      </pre>
    </div>)
}

export default PullRequestTemplate;
