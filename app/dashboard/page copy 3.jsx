"use client";

import Header from "@/components/overview/Header";
import { useSession } from "next-auth/react";

export default function Overview() {
  const session = useSession();

  const name = session?.data?.user?.name.split(" ")[0];

  return (
    <>
      <Header name={name} />

      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 flex-grow h-full">
    {/* Left Section with 3 Parts (Fill Available Space) */}
    <div className="grid grid-rows-3 gap-2 h-full">
      <div className="bg-black flex items-center justify-center text-white h-full">PART 1</div>
      <div className="bg-black flex items-center justify-center text-white h-full">PART 2</div>
      <div className="bg-black flex items-center justify-center text-white h-full">PART 3</div>
    </div>

    {/* Right Sidebar (TRAN) - Fills Height */}
    <div className="bg-black flex items-center justify-center text-white h-full">
      TRAN
    </div>
  </div>
    </>
  );
}
