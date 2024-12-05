import React, { useContext } from "react";
import s from './Headers.module.css';
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../stores/ThemeSwitch";

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme)

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  }

  return (
    <>
      <button
        className={`${s.themeButton} ${theme === 'darkTheme' ? s.darkTheme : s.lightTheme}`}
        onClick={handleToggleTheme}
      > Смена темы </button>
    </>
  );
};

export default ThemeSwitch;
