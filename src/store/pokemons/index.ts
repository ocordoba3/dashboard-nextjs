import { SinglePokemon } from "@/pokemons/interfaces/single-pokemon";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const favoritesKey = "pokemon-favorites";

export interface PokemonsState {
  favorites: Array<SinglePokemon>;
}

const initialState: PokemonsState = {
  favorites: [],
};

export const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    initFavs: (state, action: PayloadAction<SinglePokemon[]>) => {
      state.favorites = action.payload;
    },
    updateFavs: (state, action: PayloadAction<SinglePokemon>) => {
      const exists = state.favorites.find(
        (pokemon) => pokemon.id === action.payload.id
      );
      if (exists) {
        state.favorites = state.favorites.filter(
          (pokemon) => pokemon.id !== action.payload.id
        );
      } else {
        state.favorites.push(action.payload);
      }
      localStorage.setItem(favoritesKey, JSON.stringify(state.favorites));
    },
  },
});

// Action creators are generated for each case reducer function
export const { initFavs, updateFavs } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
