import { useState, useEffect } from "react";

function useTimmer() {
  const [isRunning, SetIsRunning] = useState(false);
  const [timmer, setTimmer] = useState(0);

  useEffect(() => {
    let timmerId;
    if (isRunning) {
      timmerId = setInterval(() => {
        setTimmer((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(timmerId);
  }, [isRunning]);

  let toggle = () => {
    SetIsRunning(!isRunning);
  };

  let reset = () => {
     setTimmer(0);
     SetIsRunning(false)
  };

  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num) => String(num).padStart(2, "0");

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };
return { timmer, formattedTime: formatTime(timmer), isRunning, toggle, reset };}


export default useTimmer