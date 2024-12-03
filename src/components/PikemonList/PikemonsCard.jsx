import React from "react";
import s from './PikemonList.module.css'

const PikemonsCard = ({ pikemons, theme, setModalOpen, setSelectedPokemon }) => {
  return (
    <div
        className={`${s.themeCard} ${theme === 'darkTheme' ? s.darkTheme2 : s.lightTheme2}`}
        onClick={() => {
          setSelectedPokemon(pikemons); 
          setModalOpen(true);
        }}
    >
      <img src={pikemons.sprite} alt={pikemons.name} />
      <h3>{pikemons.name}</h3>
      <p>Types: {pikemons.types.join(", ")}</p>
    </div>
  );
};

export default PikemonsCard;
