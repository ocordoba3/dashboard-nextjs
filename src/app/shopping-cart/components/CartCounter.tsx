"use client";

import React, { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 10 }: Props) => {
  const [count, setCount] = useState(value);

  return (
    <>
      <span className="text-5xl font-bold">{count}</span>
      <div className="flex">
        <button
          onClick={() => setCount(count - 1)}
          className="rounded-xl bg-red-900 hover:bg-red-700 p-2 transition-all text-white flex items-center justify-center mx-1 w-[80px]"
        >
          -1
        </button>
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-xl bg-blue-900 hover:bg-blue-700 p-2 transition-all text-white flex items-center justify-center mx-1 w-[80px]"
        >
          +1
        </button>
      </div>
    </>
  );
};
