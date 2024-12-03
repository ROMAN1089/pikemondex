import React, { useContext, useEffect, useRef, useState } from "react";
import PikemonsCard from "./PikemonsCard";
import s from "./PikemonList.module.css";
import Modal from "../Modal/Modal";
import { ThemeContext } from "../Context/ThemeContext";


const PikemonList = ({
  pikemons,
  loadMore,
  hasMore,
  loading,
}) => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const {theme, toggleTheme } = useContext(ThemeContext);
  const loadingRef = useRef(loading);
  loadingRef.current = loading;

  const handleScroll = (e) => {
    const bottom =
      document.documentElement.scrollHeight - 100 <=
      document.documentElement.scrollTop + window.innerHeight;
    if (bottom && !loadingRef.current && hasMore) {
      loadMore();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore]);

  return (
    <div
      className={`${s.themeList} ${
        theme === "darkTheme" ? s.darkTheme1 : s.lightTheme1
      }`}
    >
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        pikemons={selectedPokemon}
      />

      {pikemons.map((pikemon) => (
        <PikemonsCard
          key={pikemon.id}
          pikemons={pikemon}
          theme={theme}
          setModalOpen={setModalOpen}
          setSelectedPokemon={setSelectedPokemon}
        />
      ))}

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default PikemonList;
