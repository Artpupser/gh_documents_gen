

export type FundingObject = {
  github: string[],
  patreon: string | null,
  open_collective: string | null,
  tidelift: string | null,
  ko_fi: string | null,
  polar: string | null,
  community_bridge: string | null,
  buy_me_a_coffee: string | null,
  liberapay: string | null,
  otechie: string | null,
  custom: string[],
}

const Funding : (props: {funding: FundingObject}) => string = (props: {
  funding: FundingObject
}) : string =>  {

  let text: string = `# .github/FUNDING.yml\n`;

  text += props.funding.github.length > 0
    ? `github:\n${props.funding.github.map((item:string) => {return `\t- ${item}`}).join('\n')}\n`
    : ``;
  text += props.funding.patreon ? `patreon: ${props.funding.patreon}\n` : ``;
  text += props.funding.open_collective ? `open_collective: ${props.funding.open_collective}\n` : ``;
  text += props.funding.ko_fi ? `ko_fi: ${props.funding.ko_fi}\n` : ``;
  text += props.funding.tidelift ? `tidelift: ${props.funding.tidelift}\n` : ``;
  text += props.funding.polar ? `polar: ${props.funding.polar}\n` : ``;
  text += props.funding.community_bridge ? `community_bridge: ${props.funding.community_bridge}\n` : ``;
  text += props.funding.buy_me_a_coffee ? `buy_me_a_coffee: ${props.funding.buy_me_a_coffee}\n` : ``;
  text += props.funding.liberapay ? `liberapay: ${props.funding.liberapay}\n` : ``;
  text += props.funding.otechie ? `otechie: ${props.funding.otechie}\n` : ``;

  text += props.funding.custom.length > 0
    ? `custom:\n${props.funding.custom.map((item:string) => {return `\t- ${item}`}).join('\n')}\n`
    : ``;
  return text;
}


export default Funding
