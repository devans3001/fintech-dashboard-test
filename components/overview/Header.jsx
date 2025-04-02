import ComboboxDemo from "../ui/combox";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import DialogIcon from "./DialogIcon";
  
// export default function Header({name}) {
//   return (
//     <header className="flex justify-between items-center bg-white p-4 shadow rounded-lg">
//     <h1 className="text-xl font-bold">
//       Hello, {name || "User"} 👋
//     </h1>

//     <ComboboxDemo/>

//     <div className="flex gap-2">

//     <DialogIcon icon={<IoIosNotificationsOutline className="text-gray-900"/>}/>
//     <DialogIcon icon={<LuMessageCircleMore className="text-gray-900"/>}/>
//     <DialogIcon icon={<CiSettings className="text-gray-900"/>}/>
//     </div>
//   </header>
//   );
// }

import { Button } from "@/components/ui/button";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SideBar from "../sidebar/SideBar";

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
      <SheetContent side="left" className="p-6 bg-gray-100 border-0">
          <SideBar mobile={true} /> {/* Reuse SideBar with mobile prop */}
        </SheetContent>
      </Sheet>

      {/* Greeting */}
      <h1 className="text-lg md:text-xl font-bold">
        Hello man, {name || "User"} 👋
      </h1>

      {/* Dropdown (Centered on Mobile) */}
      <div className="w-full md:w-auto flex justify-center order-3 md:order-2">
        <ComboboxDemo />
      </div>

      {/* Icons (Desktop Only) */}
      <div className="hidden md:flex gap-4 order-2 md:order-3">
        <DialogIcon icon={<IoIosNotificationsOutline className="text-gray-900" />} />
        <DialogIcon icon={<LuMessageCircleMore className="text-gray-900" />} />
        <DialogIcon icon={<CiSettings className="text-gray-900" />} />
      </div>
    </header>
  );
}
  