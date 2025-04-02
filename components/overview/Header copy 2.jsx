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

export default function Header({ name }) {
    return (
      <header className="flex flex-wrap md:flex-nowrap justify-between items-center bg-white p-4 shadow rounded-lg">
        {/* Greeting */}
        <h1 className="text-lg md:text-xl font-bold">
          Hello, {name || "User"} 👋
        </h1>
  
        {/* Dropdown (Responsive) */}
        <div className="w-full md:w-auto flex justify-center">
          <ComboboxDemo />
        </div>
  
        {/* Icons (Hidden on Mobile, Shown on Desktop) */}
        <div className="hidden md:flex gap-4">
          <DialogIcon icon={<IoIosNotificationsOutline className="text-gray-900" />} />
          <DialogIcon icon={<LuMessageCircleMore className="text-gray-900" />} />
          <DialogIcon icon={<CiSettings className="text-gray-900" />} />
        </div>
      </header>
    );
  }
  