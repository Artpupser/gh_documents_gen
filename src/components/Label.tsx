const Label = (props: {
  name: string;
  holder: string;
  getter: () => string;
  setter: (value: string) => void;
}) => {
  return(
    <label className="flex flex-col gap-1">
      <span>{props.name}</span>
      <input
        value={props.getter()}
        onChange={(e) => props.setter(e.target.value)}
        className="border rounded-md p-2"
        placeholder={props.holder}
      />
    </label>
  )
}



export default Label;
