import { WidgetsGrid } from "@/components";
import React from "react";

export default function DashboardMainPage() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-4 p-4">
      <div className="flex w-full justify-between gap-x-2">
        <h1 className="text-3xl font-bold ">Dashboard</h1>
      </div>
      <WidgetsGrid />
    </div>
  );
}
