"use client";

import SideBar from "@/components/sidebar/SideBar";
import DashboardProvider from "../context/Dashboard";

export default function Dashboard({ children }) {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-6 h-screen">
    //   <SideBar />

    //   {/* <main className="col-span-5 pt-3 pb-4 px-6 flex flex-col gap-4 ">
    //     {children}
    //   </main> */}

    //   <main className="col-span-6 md:pl-64 pt-3 pb-4 px-6 flex flex-col gap-4 overflow-y-auto w-full border-8 border-red-500">
    //     {children}
    //   </main>
    // </div>
    <DashboardProvider>
      <div className="flex gap-3 justify-between ">
        <SideBar />

        <main className="flex-1 py-6 px-4">{children}</main>
      </div>
    </DashboardProvider>
  );
}
