import UserProfile from "./UserProfile";
import SideRoutes from "./SideRoutes";
import SignOut from "./SignOut";
import { GiWallet } from "react-icons/gi";

export default function SideBar({ mobile = false }) {
  return (
    <>
      {/* <aside className="hidden md:block col-span-1 bg-gray-50 text-black p-6 relative"> */}
      <aside className={`
      ${mobile ? "flex flex-col justify-between" : "hidden"} 
       md:flex md:flex-col md:justify-between bg-gray-100 md:backdrop-blur-md h-dvh
      md:shadow-lg rounded-tr-[50px] rounded-br-[50px] p-6 border border-white/20 fixed top-0 left-0 z-50
    `}>
      {/* <aside className="hidden md:flex justify-between flex-col col-span-1 bg-gray-100 backdrop-blur-md shadow-lg rounded-[50px] p-6 relative border  border-white/20"> */}
        <div className="flex items-center gap-3 my-8 justify-center">
          <GiWallet className="text-4xl" /> 
          <h1 className="font-bold text-2xl">iBanKol</h1>{" "}
         
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
