import CopyButton from "../components/CopyButton.tsx";
import DownloadButton from "../components/DownloadButton.tsx";

const IssueTemplate = () => {

  const bugReport:string = `name: Bug Report
description: Report a bug to help us improve
title: "[BUG]: "
labels: ["bug"]
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        Please fill out the form below to help us reproduce and fix the issue.

  - type: input
    id: summary
    attributes:
      label: Short summary
      placeholder: Briefly describe the issue
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Steps to reproduce
      description: How can we reproduce this bug?
      placeholder: |
        1. Go to...
        2. Click on...
        3. Observe...
        4. See error...
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Expected behavior
      placeholder: What did you expect to happen?
    validations:
      required: true

  - type: textarea
    id: actual
    attributes:
      label: Actual behavior
      placeholder: What actually happened?
    validations:
      required: true

  - type: textarea
    id: environment
    attributes:
      label: Environment
      placeholder: |
        OS: Windows / Linux / macOS
        Browser: Chrome / Firefox / etc
    validations:
      required: false

  - type: dropdown
    id: severity
    attributes:
      label: Severity
      options:
        - Low (minor issue)
        - Medium (affects functionality)
        - High (critical / blocking)
    validations:
      required: true

  - type: textarea
    id: additional
    attributes:
      label: Additional context
      placeholder: Add any other context, logs, or screenshots`;

  const featureReport: string = `name: Bug Report
description: Report a bug to help us improve
title: "[BUG]: "
labels: ["bug"]
assignees: []

body:
  - type: markdown
    attributes:
      value: |
        Please fill out the form below to help us reproduce and fix the issue.

  - type: input
    id: summary
    attributes:
      label: Short summary
      placeholder: Briefly describe the issue
    validations:
      required: true

  - type: textarea
    id: steps
    attributes:
      label: Steps to reproduce
      description: How can we reproduce this bug?
      placeholder: |
        1. Go to...
        2. Click on...
        3. Observe...
        4. See error...
    validations:
      required: true

  - type: textarea
    id: expected
    attributes:
      label: Expected behavior
      placeholder: What did you expect to happen?
    validations:
      required: true

  - type: textarea
    id: actual
    attributes:
      label: Actual behavior
      placeholder: What actually happened?
    validations:
      required: true

  - type: textarea
    id: environment
    attributes:
      label: Environment
      placeholder: |
        OS: Windows / Linux / macOS
        Browser: Chrome / Firefox / etc
    validations:
      required: false

  - type: dropdown
    id: severity
    attributes:
      label: Severity
      options:
        - Low (minor issue)
        - Medium (affects functionality)
        - High (critical / blocking)
    validations:
      required: true

  - type: textarea
    id: additional
    attributes:
      label: Additional context
      placeholder: Add any other context, logs, or screenshots`;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">
        'bug_report.yml' template
      </h1>

      <div className="grid gap-4">

        <div className="flex flex-row gap-2">
          <CopyButton content={bugReport} />

          <DownloadButton
            name={"PULL_REQUEST_TEMPLATE.yml"}
            extension={"yml"}
            content_in_file={bugReport}
          />
        </div>
      </div>

      <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md border overflow-x-auto">
        {bugReport}
      </pre>

      <h1 className="text-2xl font-bold">
        'feature_request.yml' template
      </h1>
      <div className="grid gap-4">

        <div className="flex flex-row gap-2">
          <CopyButton content={featureReport} />

          <DownloadButton
            name={"PULL_REQUEST_TEMPLATE.yml"}
            extension={"yml"}
            content_in_file={featureReport}
          />
        </div>
      </div>

      <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md border overflow-x-auto">
        {featureReport}
      </pre>
    </div>)

}

export default IssueTemplate;
