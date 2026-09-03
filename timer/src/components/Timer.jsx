import { useState, useEffect, useRef } from "react";

const INITIAL_FOCUS_TIME = 60 * 60; // 25 minutes in seconds
const INITIAL_BREAK_TIME = 5 * 60; // 5 minutes in seconds
const RADIUS = 48;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // ~301.59

export default function ChronosTimer() {
  const [mode, setMode] = useState("Focus");
  const [timeLeft, setTimeLeft] = useState(INITIAL_FOCUS_TIME);
  const [isActive, setIsActive] = useState(false);

  // useRef prevents stale closures in the interval
  const timerRef = useRef(null);

  const totalTime = mode === "Focus" ? INITIAL_FOCUS_TIME : INITIAL_BREAK_TIME;
  const progress = timeLeft / totalTime;
  const strokeDashoffset = CIRCUMFERENCE - progress * CIRCUMFERENCE;

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      // Optional: Auto-switch mode or play a notification sound here
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === "Focus" ? INITIAL_FOCUS_TIME : INITIAL_BREAK_TIME);
  };

  const skipTimer = () => {
    setIsActive(false);
    if (mode === "Focus") {
      setMode("Break");
      setTimeLeft(INITIAL_BREAK_TIME);
    } else {
      setMode("Focus");
      setTimeLeft(INITIAL_FOCUS_TIME);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen p-container-padding relative bg-background text-on-surface overflow-hidden antialiased">
      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-96 h-96 bg-tertiary opacity-[0.03] rounded-full blur-3xl" />
      </div>

      {/* Timer Canvas */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Circular Progress & Time Display */}
        <div className="relative flex items-center justify-center w-80 h-80 md:w-96 md:h-96">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {/* Background Ring */}
            <circle
              className="stroke-[#1A1A1A]"
              strokeWidth="2"
              fill="none"
              cx="50"
              cy="50"
              r={RADIUS}
            />
            {/* Progress Ring */}
            <circle
              className="timer-ring-progress stroke-tertiary"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r={RADIUS}
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={strokeDashoffset}
            />
          </svg>

          <div className="flex flex-col items-center">
            <span className="font-timer-display-mobile md:font-timer-display text-timer-display-mobile md:text-timer-display text-on-surface tabular-nums tracking-tighter select-none">
              {formatTime(timeLeft)}
            </span>
            <span className="font-label-mono text-label-mono text-outline uppercase tracking-widest mt-2 select-none">
              {mode}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-section-gap mt-section-gap">
          {/* Reset Button */}
          <button
            onClick={resetTimer}
            aria-label="Reset Timer"
            className="flex flex-col items-center justify-center text-outline hover:text-on-surface transition-colors duration-200 group active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-active:scale-90"
            >
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12" />
              <path d="M3 3v9h9" />
            </svg>
          </button>

          {/* Start/Pause Button (Primary Action) */}
          <button
            onClick={toggleTimer}
            aria-label={isActive ? "Pause Timer" : "Start Timer"}
            className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 group ${
              isActive
                ? "bg-tertiary text-on-tertiary"
                : "bg-on-surface text-primary-container hover:bg-tertiary hover:text-on-tertiary"
            }`}
          >
            {isActive ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="transition-transform group-active:scale-90"
              >
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-1 transition-transform group-active:scale-90"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Skip/Next Button */}
          <button
            onClick={skipTimer}
            aria-label="Skip to Next Break"
            className="flex flex-col items-center justify-center text-outline hover:text-on-surface transition-colors duration-200 group active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-active:scale-90"
            >
              <polygon points="5 4 15 12 5 20 5 4" />
              <line x1="19" x2="19" y1="5" y2="19" />
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
