const Button = (props: {
  onclick: () => void;
  state: () => string;
}) => {
  return (
    <button
      onClick={props.onclick}
      className="bg-black text-white px-4 py-2 rounded-md w-fit"
    >
      {props.state()}
    </button>
  );
}

export default Button;
