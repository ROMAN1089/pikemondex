import React, { useEffect } from "react";
import PikemonsCard from "./PikemonsCard";
import s from "./PikemonList.module.css";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchPikemons } from "../../stores/pokemonSlice";
import { clearSelectedPikemons } from "../../stores/selectedPokemonSlice";
import { selectFilteredPikemons } from "../../stores/filterSlice";


const PikemonList = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme)
  const { pikemons, hasMore, loading } = useSelector(
    (state) => state.pikemon
  );  
  const selectedPikemon = useSelector((state) => state.selectedPikemon);
  const FilteredPikemons = useSelector(selectFilteredPikemons);
  console.log(FilteredPikemons);

  const handleScroll = (e) => {
    const bottom =
      document.documentElement.scrollHeight - 150 <=
      document.documentElement.scrollTop + window.innerHeight;
    if (bottom && !loading && hasMore) {
      dispatch(fetchPikemons());
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading, hasMore]);

  return (
    <div
      className={`${s.themeList} ${
        theme === "darkTheme" ? s.darkTheme1 : s.lightTheme1
      }`}
    >
      <Modal
        isOpen={Boolean(selectedPikemon)}
        onClose={() =>  dispatch(clearSelectedPikemons())}
        pikemons={selectedPikemon}
      />

      {Array.isArray(FilteredPikemons) && FilteredPikemons.length > 0 ? (
        FilteredPikemons.map((pikemon) => (
          <PikemonsCard
            key={pikemon.id}
            pikemons={pikemon}
            theme={theme}
          />
        ))
      ) : (
        <p>No Pokémon available.</p>
      )}

      {loading && <p>Loading...</p>}
    </div>
  );
};

export default PikemonList;
