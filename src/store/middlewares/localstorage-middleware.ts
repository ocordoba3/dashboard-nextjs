import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";
import { favoritesKey } from "../pokemons";

export const localStorageMiddleware =
  (state: MiddlewareAPI) => (next: Dispatch) => (action: Action) => {
    next(action);

    if (action.type === "pokemons/updateFavs") {
      const {
        pokemons: { favorites },
      } = state.getState() as RootState;
      console.log(favorites);
      localStorage.setItem(favoritesKey, JSON.stringify(favorites));
      return;
    }
  };
