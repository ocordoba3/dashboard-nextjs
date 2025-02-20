"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface Props {
  label: string;
  Icon: ReactNode;
  path: string;
}

export const SidebarMenuItem = ({ path, Icon, label }: Props) => {
  const currentPath = usePathname();
  return (
    <Link
      href={path}
      className={`flex items-center p-4 rounded-lg ${
        currentPath === path ? "bg-slate-500" : ""
      }`}
    >
      {Icon}
      <span className="ml-2 antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize text-white">
        {label}
      </span>
    </Link>
  );
};
