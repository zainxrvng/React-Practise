import { useState, useEffect } from "react";

function useTimmer(intialMinutes = 25) {
  const [isRunning, SetIsRunning] = useState(false);
  const [timmer, setTimmer] = useState(intialMinutes * 60);

  useEffect(() => {
    let timmerId;
    if (isRunning) {
      timmerId = setInterval(() => {
        setTimmer((prev) => prev > 0 ? prev -1 : 0);
      }, 1000);
    }

    return () => clearInterval(timmerId);
  }, [isRunning]);

  let toggle = () => {
    SetIsRunning(!isRunning);
  };

  let reset = () => {
    setTimmer(intialMinutes * 60);
    SetIsRunning(false);
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num) => String(num).padStart(2, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };
  return {
    timmer,
    formattedTime: formatTime(timmer),
    isRunning,
    toggle,
    reset,
    totalSeconds: intialMinutes * 60
  };
}


export default useTimmer