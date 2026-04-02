import type { InputProps } from "../../types";
import "./Input.scss";

function Input({ text, id, handleInput }: InputProps) {
  return (
    <div className="input">
      <label htmlFor={id}>{text}</label>
      <input type="number" id={id} onChange={(e) => handleInput(e)} />
    </div>
  );
}

export default Input;
