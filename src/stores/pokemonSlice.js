import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import axios from "axios";

const LIMIT = 20;

export const fetchPikemons = createAsyncThunk(
  "pokemon/fetchPikemons",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const offset = state.pikemon.offset;

      if (state.loading) return;

      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`
      );
      const result = response.data.results;

      const detailedPikemons = await Promise.all(
        result.map(async (pikemon) => {
          const firstResponse = await axios(pikemon.url);
          const firstData = firstResponse.data;

          const secondResponse = await axios(
            `https://pokeapi.co/api/v2/pokemon/${firstData.id}/`
          );
          const secondData = secondResponse.data;

          return {
            id: secondData.id,
            name: secondData.name,
            types: secondData.types.map((t) => t.type.name),
            sprite: secondData.sprites.front_default,
          };
        })
      );

      return { pikemons: detailedPikemons, next: response.data.next };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const pikemonSlice = createSlice({
  name: "pikemon",
  initialState: {
    pikemons: [],
    offset: 0,
    hasMore: true,
    loading: false,
    error: null,
  },
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPikemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPikemons.fulfilled, (state, action) => {
        state.loading = false;

        state.pikemons.push(...action.payload.pikemons);
        state.hasMore = Boolean(action.payload.next);

        if (action.payload.next) {
          state.offset += LIMIT; // Обновляем offset
        }
      })
      .addCase(fetchPikemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default pikemonSlice.reducer;
