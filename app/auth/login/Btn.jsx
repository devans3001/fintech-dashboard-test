"use client"; 

import { Button } from "@/components/ui/button";
import { signOut,signIn, useSession } from "next-auth/react"; //use next-auth when in client and /lib/auth in server
import { useRouter } from "next/navigation";

import { FcGoogle } from "react-icons/fc";

export default function Btn() {
    const router = useRouter()

    const {status} = useSession()


  async function handleSignIn() {
    await signIn("google"); 
 
  }
  async function handleSignOut() {
    await signOut(); 
 
  }

  return (
    <div className="flex justify-center mt-4">
      <Button 
        variant="outline" 
        className="w-full flex items-center" 
        onClick={handleSignIn} // ✅ Use onClick instead of a <form>
      >
        <FcGoogle />
        Sign in with Google
      </Button>
{status === "authenticated" && <Button onClick={handleSignOut}>
    Signout
</Button>}
    </div>
  );
}
