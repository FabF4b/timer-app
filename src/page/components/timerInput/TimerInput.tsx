import Input from "../../../components/input/Input";
import type { TimerInputProps } from "../../../types";
import "./TimerInput.scss";

function TimerInput({
  handleHoursInput,
  handleMinutesInput,
  handleSecondsInput,
}: TimerInputProps) {
  return (
    <div className="timer-input">
      <Input id="hours" text="Stunden" handleInput={handleHoursInput} />
      <Input id="minutes" text="Minuten" handleInput={handleMinutesInput} />
      <Input id="seconds" text="Sekunden" handleInput={handleSecondsInput} />
    </div>
  );
}

export default TimerInput;
