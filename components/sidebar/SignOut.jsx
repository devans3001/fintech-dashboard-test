"use client"
import { signOut } from "next-auth/react";
import { useTransition } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";


export default function SignOut() {

    const [isPending, startTransition] = useTransition();

    const handleLogout = async () => {
      startTransition(async () => {
        console.log("Logging out...");
        toast.success("Logged out successfully")
        await signOut();
      });
    };
  return (
    <div onClick={handleLogout} disabled={isPending} className="cursor-pointer flex items-center gap-1">
    <p>

    {isPending ? "Signing out..." : "Sign out"}
    </p>
    <FaSignOutAlt />
    
  </div>
  );
}
