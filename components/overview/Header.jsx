import ComboboxDemo from "../ui/combox";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";

import { Button } from "@/components/ui/button";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "../sidebar/SideBar";
import DialogComponent from "./DialogIcon";

export default function Header({ name }) {
  return (
    <header className="flex flex-wrap md:flex-nowrap justify-between items-center p-3 gap-2">
      {/* Mobile Menu Button (Hidden on Desktop) */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <BsFillMenuButtonWideFill className="text-lg" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-3 md:p-6 bg-gray-100 border-0">
          <SideBar mobile={true} /> {/* Reuse SideBar with mobile prop */}
        </SheetContent>
      </Sheet>

      {/* Greeting */}
      <h1 className="text-lg md:text-xl font-bold">
        Hello, {name || "User"} 👋
      </h1>

      {/* Dropdown (Centered on Mobile) */}
      <div className="w-full md:w-auto flex justify-center order-3 md:order-2">
        <ComboboxDemo />
      </div>


      <div className="hidden md:flex gap-4 order-2 md:order-3">
        <DialogComponent>
          <DialogComponent.Trigger>
            <Button className="rounded-[50%] text-lg bg-gray-100 cursor-pointer hover:bg-white transition-all duration-300">

            <IoIosNotificationsOutline className="text-gray-900" />
            </Button>
          </DialogComponent.Trigger>
          <DialogComponent.Content
            title="Are you sure?"
            description="This action cannot be undone. It will permanently delete your data."
          >
          </DialogComponent.Content>

          {/* <DialogIcon icon={<LuMessageCircleMore className="text-gray-900" />} />
        <DialogIcon icon={<CiSettings className="text-gray-900" />} /> */}
        </DialogComponent>
      </div>
    </header>
  );
}
