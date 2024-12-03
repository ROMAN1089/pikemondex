import React, { useContext } from "react";
import s from './Headers.module.css';
import { ThemeContext } from "../Context/ThemeContext";

const ThemeSwitch = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <>
      <button
        className={`${s.themeButton} ${theme === 'darkTheme' ? s.darkTheme : s.lightTheme}`}
        onClick={toggleTheme}
      > Смена темы </button>
    </>
  );
};

export default ThemeSwitch;
