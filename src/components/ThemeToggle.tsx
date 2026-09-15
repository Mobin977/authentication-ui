import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setDarkMode((current) => !current)}
      aria-label={
        darkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
      title={
        darkMode
          ? "Switch to light mode"
          : "Switch to dark mode"
      }
    >
      {darkMode ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}

export default ThemeToggle;
