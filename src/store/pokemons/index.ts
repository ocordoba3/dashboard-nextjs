import { SinglePokemon } from "@/pokemons/interfaces/single-pokemon";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
    // initPokemonsState: (state, action: PayloadAction<number>) => {},
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
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateFavs } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
