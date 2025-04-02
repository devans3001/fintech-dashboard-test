"use client";

import { Button } from "@/components/ui/button";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideBar from "@/components/sidebar/SideBar";

export default function Dashboard({ children }) {


  return (
    <div className="grid grid-cols-1 md:grid-cols-6 h-screen">
      <SideBar />

      {/* Mobile Sidebar (Sheet) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden fixed top-4 left-4 z-50">
            <BsFillMenuButtonWideFill />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-6 bg-gray-900 text-white">
          Sidebar Content
        </SheetContent>
      </Sheet>

      {children}
    </div>
  );
}
