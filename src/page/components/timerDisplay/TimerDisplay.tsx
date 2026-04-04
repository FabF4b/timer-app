import type { TimerDisplayProps } from "../../../types";
import "./TimerDisplay.scss";

function TimerDisplay({ timerCount }: TimerDisplayProps) {
  return (
    <div className="timer-display">
      <h4>TIMER</h4>
      <h3>
        {timerCount.toFixed(2)} <span>SEK</span>
      </h3>
    </div>
  );
}

export default TimerDisplay;
