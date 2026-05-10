import {useState} from "react";
import Button from "./Button.tsx";

const CopyButton = (props: {
  content: string;
}) => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(props.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 3 * 1000);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Button onclick={copy} state={() => {
      return copied
        ? "Скопировано! ✅"
        : "Скопировать"
    }}/>
  )
}

export default CopyButton
