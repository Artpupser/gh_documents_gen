

export type FundingObject = {
  github: string[],
  builtin: [string,string][],
  custom: string[],
}

const Funding : (props: {funding: FundingObject}) => string = (props: {
  funding: FundingObject
}) : string =>  {

  let yml: string = `# .github/FUNDING.yml\n`;
  if (props.funding.github.length > 0) {
    yml += `github:\n${props.funding.github
      .map((item:string) => {return `\t- ${item}\n`})
      .join(``)}\n`;
  }
  yml += `${props.funding.builtin
    .filter((item:[string,string]) => item[1].length > 0)
    .map((item:[string,string]) => {return `${item[0]}: ${item[1]}\n`})
    .join(``)}`
  if (props.funding.custom.length > 0) {
    yml += `custom:\n${props.funding.custom
      .map((item:string) => {return `\t- ${item}\n`})
      .join(``)}\n`;
  }
  return yml;
}


export default Funding
