import type { ButtonProps } from "../../types";
import "./Button.scss";

function Button({ text, id, clickEvent }: ButtonProps) {
  return (
    <button className="button" id={id} onClick={() => clickEvent()}>
      {text}
    </button>
  );
}

export default Button;
