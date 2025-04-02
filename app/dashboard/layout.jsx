"use client";

import SideBar from "@/components/sidebar/SideBar";

export default function Dashboard({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 h-screen">
      {/* Desktop Sidebar */}
      <SideBar />

      <main className="col-span-5 pt-3 pb-4 px-6 flex flex-col gap-4 ">
        {children}
      </main>
    </div>
  );
}