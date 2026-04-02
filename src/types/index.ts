export type TimerInputProps = {
  handleHoursInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleMinutesInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSecondsInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TimerDisplayProps = {
  timerCount: number;
};

export type TimerButtonsProps = {
  startTimer: () => void;
  resetTimer: () => void;
  pauseTimer: () => void;
  isTimerRunning: boolean;
};

export type ButtonProps = {
  text: string;
  id: string;
  clickEvent: () => void;
};

export type InputProps = {
  text: string;
  id: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
