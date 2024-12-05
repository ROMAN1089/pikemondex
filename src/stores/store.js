import { configureStore } from "@reduxjs/toolkit";
import pikemonReducer from "./pokemonSlice";
import filterReducer from "./filterSlice";
import selectedPikemonReducer from "./selectedPokemonSlice";
import themeReducer from './ThemeSwitch'

const store = configureStore({
  reducer: {
    pikemon: pikemonReducer,
    filter: filterReducer,
    selectedPikemon: selectedPikemonReducer,
    theme: themeReducer,
  },
});

export default store;