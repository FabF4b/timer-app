import Button from "../../../components/button/Button";
import type { TimerButtonsProps } from "../../../types";
import "./TimerButtons.scss";

function TimerButtons({
  startTimer,
  resetTimer,
  pauseTimer,
  isTimerRunning,
}: TimerButtonsProps) {
  return (
    <div className="timer-buttons">
      {!isTimerRunning && (
        <Button id="start" text="Start" clickEvent={startTimer} />
      )}
      {isTimerRunning && (
        <Button id="pause" text="Pause" clickEvent={pauseTimer} />
      )}
      <Button id="reset" text="Reset" clickEvent={resetTimer} />
    </div>
  );
}

export default TimerButtons;
