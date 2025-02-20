"use client";

import React from "react";
import { Widget } from "./Widget";
import { useAppSelector } from "@/store";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const WidgetsGrid = () => {
  const { value } = useAppSelector((state) => state.counter);
  const widgets = [
    {
      label: "Carrito",
      title: value,
      description: "Productos agregados",
      Icon: <AiOutlineShoppingCart size={50} />,
      href: "/dashboard/counter",
    },
  ];

  return (
    <div className="w-full grid grid-cols-2">
      {widgets.map((item) => (
        <Widget key={item.label} {...item} />
      ))}
    </div>
  );
};
