import React from "react";
import s from "./Modal.module.css";
import { useSelector } from "react-redux";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, pikemons }) => {
  if (!isOpen) return;

  const { theme } = useSelector((state) => state.theme)

  return createPortal(
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
    </div>,
    document.getElementById('modal-root')
  )
};

export default Modal;
