import React, { ReactNode } from "react";
import { Sidebar } from "../components";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gray-50/50">
      <Sidebar />
      <div className="p-4 bg-white text-slate-900 mx-4 my-4 min-h-[calc(100vh-32px)] h-auto w-4/5 rounded-xl">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
