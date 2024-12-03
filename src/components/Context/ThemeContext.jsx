import React, { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("lightTheme");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "lightTheme" ? "darkTheme" : "lightTheme"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
