import { IconMoon, IconSun } from "@tabler/icons-react";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    if (darkMode) {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.theme;
    if (
      storedTheme === "dark" ||
      (!storedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={"bg-white dark:bg-slate-700"}>
        {darkMode ? (
          <IconSun className="block h-6 w-6" onClick={toggleTheme} />
        ) : (
          <IconMoon className="block h-6 w-6" onClick={toggleTheme} />
        )}
      </div>
    </div>
  );
}

export default App;
