import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="h-full w-full flex flex-col justify-center items-center">
      <h1 className="text-9xl font-extrabold text-orange-800 tracking-widest">
        404
      </h1>
      <div className="bg-orange-600 px-2 text-sm rounded rotate-12 absolute">
        Pokemon no encontrado
      </div>
      <Link
        className="p-2 bg-orange-500 duration-150 hover:!bg-orange-300 text-blue-950 rounded-xl drop-shadow-lg group flex items-center border-2 border-b-4 border-blue-950 cursor-pointer active:bg-yellow-400"
        href="/dashboard/pokemons"
      >
        Go Home
      </Link>
    </main>
  );
}
