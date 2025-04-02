import ComboboxDemo from "../ui/combox";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import DialogIcon from "./DialogIcon";
  


export default function Header({name}) {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow rounded-lg">
    <h1 className="text-xl font-bold">
      Hello, {name || "User"} 👋
    </h1>

    <ComboboxDemo/>

    <div className="flex gap-2">

    <DialogIcon icon={<IoIosNotificationsOutline className="text-gray-900"/>}/>
    <DialogIcon icon={<LuMessageCircleMore className="text-gray-900"/>}/>
    <DialogIcon icon={<CiSettings className="text-gray-900"/>}/>
    </div>
  </header>
  );
}
