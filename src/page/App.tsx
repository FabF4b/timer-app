import { useEffect, useRef, useState } from "react";
import TimerButtons from "./components/timerButtons/TimerButtons";
import TimerDisplay from "./components/timerDisplay/TimerDisplay";
import TimerInput from "./components/timerInput/TimerInput";
import "./App.scss";

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerCount, setTimerCount] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const timeLeft = timerCount - (now - startTime) / 1000;
  const intervalId = useRef(0);
  const initialTimerCount = useRef(0);

  function handleHoursInput(e: React.ChangeEvent<HTMLInputElement>) {
    const hours = Number(e.target.value) * 3600;
    setHours(hours);
  }

  function handleMinutesInput(e: React.ChangeEvent<HTMLInputElement>) {
    const minutes = Number(e.target.value) * 60;
    setMinutes(minutes);
  }

  function handleSecondsInput(e: React.ChangeEvent<HTMLInputElement>) {
    const seconds = Number(e.target.value);
    setSeconds(seconds);
  }

  useEffect(() => {
    const value = hours + minutes + seconds;
    setTimerCount(value);
    initialTimerCount.current = value;
  }, [hours, minutes, seconds]);

  useEffect(() => {
    if ((now - startTime) / 1000 >= timerCount) {
      clearInterval(intervalId.current);
      setNow(startTime + timerCount * 1000);
      setIsTimerRunning(false);
    }
  }, [startTime, now, timerCount]);

  function startTimer() {
    const timeNow = Date.now();

    if (isTimerRunning === true) return;

    if (!isTimerPaused) {
      setStartTime(timeNow);
      setNow(timeNow);
      setIsTimerRunning(true);
    } else {
      setTimerCount(timeLeft);
      setStartTime(timeNow);
      setNow(timeNow);
      setIsTimerRunning(true);
      setIsTimerPaused(false);
    }

    intervalId.current = setInterval(() => {
      setNow(Date.now());
    }, 35);
  }

  function pauseTimer() {
    clearInterval(intervalId.current);
    setIsTimerPaused(true);
    setIsTimerRunning(false);
  }

  function resetTimer() {
    clearInterval(intervalId.current);
    setTimerCount(initialTimerCount.current);
    setStartTime(0);
    setNow(0);
    setIsTimerRunning(false);
    setIsTimerPaused(false);
  }

  return (
    <div className={`app ${isTimerRunning ? "app__active" : ""}`}>
      <TimerInput
        handleHoursInput={handleHoursInput}
        handleMinutesInput={handleMinutesInput}
        handleSecondsInput={handleSecondsInput}
      />
      <TimerDisplay timerCount={timeLeft} />
      <TimerButtons
        startTimer={startTimer}
        resetTimer={resetTimer}
        pauseTimer={pauseTimer}
        isTimerRunning={isTimerRunning}
      />
    </div>
  );
}

export default App;
