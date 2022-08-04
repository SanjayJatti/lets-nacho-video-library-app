import { createContext, useContext, useLayoutEffect, useState } from "react";

const themeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("darkTheme");

  useLayoutEffect(() => {
    if (theme === "darkTheme") {
      document.documentElement.classList.remove("light-theme");
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
      document.documentElement.classList.add("light-theme");
    }
  }, [theme]);
  const themeToggle = () => {
    setTheme((theme) => (theme === "darkTheme" ? "lightTheme" : "darkTheme"));
  };

  return (
    <themeContext.Provider value={{ themeToggle, theme }}>
      {children}
    </themeContext.Provider>
  );
};
const useTheme = () => useContext(themeContext);

export { useTheme, ThemeProvider };
