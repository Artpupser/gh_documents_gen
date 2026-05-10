const supportMark = (mark: boolean): string => {
  return mark ? `✅` : '❌';
}

const Security = (props: {
  versions: [string, boolean][];
  responseTime: string;
}): string => {
  return `## Supported Versions
Only the latest version of this project is supported with security updates.

| Version | Supported |
| ------- | --------- |
${props.versions.map(v => `| ${v[0]} | ${supportMark(v[1])} |`).join('\n')}

## Reporting a Vulnerability

If you discover a security vulnerability, please report it privately via GitHub Security Advisories.

Please do NOT open a public issue.

We aim to respond within ${props.responseTime}.`
}

export default Security;
