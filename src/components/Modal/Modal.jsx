import React, { useContext } from "react";
import s from "./Modal.module.css";
import ThemeProvider, { ThemeContext } from "../Context/ThemeContext";

const Modal = ({ isOpen, onClose, pikemons }) => {

  const {theme, toggleTheme } = useContext(ThemeContext);

  return isOpen ? (
    <div className={s.modalOverlay} onClick={onClose}>
      <div
        className={`${s.modalContent} ${
          theme === "darkTheme" ? s.darkTheme : s.lightTheme
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`${s.closeModal} ${
            theme === "darkTheme" ? s.lightTheme : s.darkTheme
          }`}
        >
          X
        </button>
        <img src={pikemons.sprite} alt={pikemons.name} />
        <h2>{pikemons.name}</h2>
        <p>Types: {pikemons.types.join(", ")}</p>
      </div>
    </div>
  ) : null;
};

export default Modal;
