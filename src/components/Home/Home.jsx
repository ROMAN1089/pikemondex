import React, { useEffect, useState } from "react";
import PikemonFilter from "./../PikemonFIlter/PikemonFilter";
import PikemonList from "./../PikemonList/PikemonList";
import ThemeSwitch from "../Headers/ThemeSwitch";
import { useDispatch } from "react-redux";
import "./../../global.css"
import { fetchPikemons } from "../../stores/pokemonSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPikemons());
  }, [dispatch]);

  return (
    <div className={`container`}>
      <ThemeSwitch />
      <h1>Pokedex</h1>
      <PikemonFilter/>
      <PikemonList />
    </div>
  );
};

export default Home;
