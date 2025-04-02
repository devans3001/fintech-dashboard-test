"use client";
import { Button } from "@/components/ui/button";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "@/components/sidebar/SideBar";

export default function Dashboard({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 h-screen">
      {/* Desktop Sidebar */}
      <SideBar />

      {/* Mobile Sidebar (Sheet) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden fixed top-4 left-4 z-50">
            <BsFillMenuButtonWideFill />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-6 bg-gray-100 border-0">
          <SideBar mobile={true} /> {/* Reuse SideBar with mobile prop */}
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <main className="col-span-5 p-6 flex flex-col gap-6">
        {children}
      </main>
    </div>
  );
}