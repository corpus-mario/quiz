import { useState, useRef } from "react";

export default function useTimer(maxTime: number) {
  const [time, setTime] = useState(maxTime);
  const interval = useRef<NodeJS.Timeout>();

  const startTimer = () => {
    setTime(maxTime);
    interval.current = setInterval(() => {
      setTime((v) => v - 1);
    }, 1000);
  };

  const stopTimer = () => clearInterval(interval.current);

  return {
    time,
    startTimer,
    stopTimer,
  };
}
