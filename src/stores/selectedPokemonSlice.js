import { createSlice } from "@reduxjs/toolkit";

const selectedPikemonsSlice = createSlice({
    name: "selectedPikemons",
    initialState: null,
    reducers: {
        setSelectedPikemons(state, action) {
            return action.payload;
        },
        clearSelectedPikemons() {
            return null;
        },
    },
})

export const { setSelectedPikemons, clearSelectedPikemons } = selectedPikemonsSlice.actions;
export default selectedPikemonsSlice.reducer;