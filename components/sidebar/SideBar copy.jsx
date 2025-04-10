import UserProfile from "./UserProfile";
import SideRoutes from "./SideRoutes";
import SignOut from "./SignOut";
import { GiWallet } from "react-icons/gi";
import { Separator } from "../ui/separator";

export default function SideBar() {
  return (
    <>
      {/* <aside className="hidden md:block col-span-1 bg-gray-50 text-black p-6 relative"> */}
      <aside className="hidden md:flex justify-between flex-col col-span-1 bg-gray-100 backdrop-blur-md shadow-lg rounded-[50px] p-6 relative border  border-white/20">
        <div className="flex items-center gap-3">
          <GiWallet className="text-4xl" /> 
          <h1 className="font-bold text-3xl">iBanKo</h1>{" "}
         
        </div>

        {/* Profile */}
        <UserProfile />
        {/* SideBar Routes */}
        <SideRoutes />

        {/* SignOut */}
        <SignOut />
      </aside>
    </>
  );
}
