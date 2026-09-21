import { useEffect, useState } from "react";
const STORAGE_KEY = "radici-theme";

function getInitialTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "light"
          ? "Attiva la modalità scura"
          : "Attiva la modalità chiara"
      }
      aria-pressed={theme === "dark"}
    >
      {theme === "light" ? (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <circle
            cx="12"
            cy="12"
            r="4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <line x1="12" y1="2" x2="12" y2="4.5" />
            <line x1="12" y1="19.5" x2="12" y2="22" />
            <line x1="2" y1="12" x2="4.5" y2="12" />
            <line x1="19.5" y1="12" x2="22" y2="12" />
            <line x1="4.9" y1="4.9" x2="6.6" y2="6.6" />
            <line x1="17.4" y1="17.4" x2="19.1" y2="19.1" />
            <line x1="4.9" y1="19.1" x2="6.6" y2="17.4" />
            <line x1="17.4" y1="6.6" x2="19.1" y2="4.9" />
          </g>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export default ThemeToggle;
