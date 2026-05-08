import {useState} from "react";

const CopyButton = (props: {
  content: string;
}) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(props.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error(e);
    }
  }

  return(
    <button
      onClick={copy}
      className="bg-black text-white px-4 py-2 rounded-md w-fit"
    >
      {copied ? "Скопировано" : "Скопировать Code of Conduct"}
    </button>
  )
}

export default CopyButton
