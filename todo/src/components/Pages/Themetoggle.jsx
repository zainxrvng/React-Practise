import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      className={`rounded-xl p-2 text-[#464554] hover:bg-white/60 dark:text-[#a3a6c2] dark:hover:bg-white/10 transition ${className}`}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
