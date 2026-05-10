import {useState} from "react";
import Button from "./Button.tsx";

const DownloadButton = (props: {
  name: string;
  extension: string;
  content_in_file: string;
}) => {
  const [downloaded, setDownloaded] = useState(false);

  const download = () => {
    try {
      const blob = new Blob(
        [props.content_in_file],
        {type: "text/plain;charset=utf-8"}
      );

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = `${props.name}.${props.extension}`;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setDownloaded(true);

      setTimeout(() => {
        setDownloaded(false);
      }, 3 * 1000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Button
      onclick={download}
      state={() => {
        return downloaded
          ? "Успех! ✅"
          : `Скачать ${props.extension.toUpperCase()}`;
      }}
    />
  );
};

export default DownloadButton;
