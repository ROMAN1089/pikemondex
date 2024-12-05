import { createSelector, createSlice } from "@reduxjs/toolkit";

export const selectFilteredPikemons = createSelector(
  (state) => state.pikemon.pikemons,
  (state) => state.filter.nameFilter,
  (state) => state.filter.typeFilter,
  (pikemons, nameFilter, typeFilter) => {
    return pikemons.filter((pikemon) => {
      const matchesName =
        !nameFilter ||
        pikemon.name.toLowerCase().includes(nameFilter.toLowerCase());
      const matchesType =
        typeFilter === "all" ||
        pikemon.types.includes(typeFilter.toLowerCase());

      return matchesName && matchesType;
    });
  }
);

const filterSlice = createSlice({
  name: "filter",
  initialState: { nameFilter: "", typeFilter: "all" },
  reducers: {
    setFilters(state, action) {
      const { nameFilter, typeFilter } = action.payload;
      if (nameFilter !== undefined) state.nameFilter = nameFilter;
      if (typeFilter !== undefined) state.typeFilter = typeFilter;
    },
  },
});

export const { setFilters } = filterSlice.actions;
export default filterSlice.reducer;