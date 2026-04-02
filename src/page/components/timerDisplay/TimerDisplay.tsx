import type { TimerDisplayProps } from "../../../types";
import "./TimerDisplay.scss";

function TimerDisplay({ timerCount }: TimerDisplayProps) {
  return (
    <div className="timer-display">
      <h3>{timerCount.toFixed(2)}</h3>
    </div>
  );
}

export default TimerDisplay;
