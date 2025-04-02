"use client";

import Header from "@/components/overview/Header";
import { useSession } from "next-auth/react";

export default function Overview({ children }) {
  const session = useSession();

  const name = session?.data?.user?.name.split(" ")[0]

  return (
    <>
      {/* Main Content */}
      <main className="col-span-5 p-6 flex flex-col gap-6">
       <Header name={name}/>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow">Widget 1</div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">Widget 2</div>
        </section>
      </main>

      {children}
    </>
  );
}
