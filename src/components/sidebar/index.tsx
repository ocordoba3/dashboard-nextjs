import Image from "next/image";
import React from "react";
import { SidebarMenuItem } from "./SidebarMenuItem";
import { LuLayoutDashboard } from "react-icons/lu";
import { GoNumber } from "react-icons/go";
import { IoBugSharp } from "react-icons/io5";

export const Sidebar = () => {
  const iconSize = 24;
  const menuItems = [
    {
      label: "Dashboard",
      Icon: <LuLayoutDashboard size={iconSize} />,
      path: "/dashboard/main",
    },
    {
      label: "Counter",
      Icon: <GoNumber size={iconSize} />,
      path: "/dashboard/counter",
    },
    {
      label: "Pokemons",
      Icon: <IoBugSharp size={iconSize} />,
      path: "/dashboard/pokemons",
    },
  ];
  return (
    <aside className="bg-gradient-to-br from-gray-800 to-gray-900 inset-0 my-4 ml-4 h-[calc(100vh-32px)] w-1/5 rounded-xl transition-transform duration-300 sticky">
      <div className="relative border-b border-white/20">
        <div className="flex flex-wrap items-center gap-4 py-6 px-8">
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white w-full">
            DashboardApp
          </h6>
          <div className="flex flex-nowrap w-full">
            <Image
              className="rounded-full"
              width={26}
              height={26}
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile picture"
            />
            <p className="ml-2 antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize line-clamp-1">
              Oscar Córdoba
            </p>
          </div>
        </div>
      </div>
      <div className="m-4">
        <ul className="mb-4 flex flex-col gap-1">
          {menuItems.map((props) => (
            <li key={props.label}>
              <SidebarMenuItem {...props} />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
