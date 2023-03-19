import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const Info = { theme, handleThemeSwitch };
  return <ThemeContext.Provider value={Info}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
