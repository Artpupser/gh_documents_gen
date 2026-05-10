const Checkbox = (props: {
  name: string;
  getter: () => boolean;
  setter: (value: boolean) => void;
}) => {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={props.getter()}
        onChange={(e) => props.setter(e.target.checked)}
        className="accent-black"
      />
      {props.name}
    </label>
  )
}

export default Checkbox;
