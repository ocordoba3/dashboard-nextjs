"use client";
import { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from ".";
import { favoritesKey, initFavs } from "./pokemons";
import { SinglePokemon } from "@/pokemons/interfaces/single-pokemon";

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  function getInitialFavs(): Array<SinglePokemon> {
    const pokemons = JSON.parse(localStorage.getItem(favoritesKey) ?? "[]");
    return pokemons;
  }

  useEffect(() => {
    const initialFavs = getInitialFavs();
    store.dispatch(initFavs(initialFavs));
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
