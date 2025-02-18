"use client";

import { HugeiconsIcon, HugeiconsIconProps } from "@hugeicons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  label: string;
  Icon: HugeiconsIconProps["icon"];
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
      <HugeiconsIcon
        icon={Icon}
        size={24}
        color="currentColor"
        strokeWidth={1}
      />
      <span className="ml-2 antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize text-white">
        {label}
      </span>
    </Link>
  );
};
