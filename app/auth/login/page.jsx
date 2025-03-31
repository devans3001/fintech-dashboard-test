'use client'
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "./LoginForm";
import { useSession,signIn as Lover } from "next-auth/react";
import { signIn } from "@/lib/auth";
import Btn from "./Btn";
// import animationData from "";

export default function AuthLayout() {
  const [darkMode, setDarkMode] = useState(false);

  const session = useSession();


  // console.log("Session:", session);

  return (
    <div className={`flex h-screen ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      {/* Left Side - Animation */}
      <div className="hidden relative md:flex w-1/2 justify-center items-center bg-gray-100 dark:bg-gray-800">
        <Image 
          src={"https://plus.unsplash.com/premium_photo-1670213989449-29b83feebe8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZpbmFuY2V8ZW58MHx8MHx8fDA%3D"} 
          className="w-3/4" 
          alt="" 
          fill 
        />
      </div>
      

      {/* Right Side - Auth Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <Card className="w-full max-w-md p-6 shadow-lg">
          <CardContent>
            <h2 className="text-2xl font-bold mb-4 text-center">Welcome Back</h2>
          <LoginForm/>
          <Btn/>
            <div className="mt-4 text-center">
              <span className="text-sm">Don't have an account? <Link href="/auth/register" className="text-blue-500">Sign up</Link></span>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6 flex items-center space-x-2">
          <span className="text-sm text-gray-700 dark:text-gray-300">Dark Mode</span>
          <Switch 
            checked={darkMode} 
            onCheckedChange={() => setDarkMode(!darkMode)} 
            className={darkMode ? "bg-gray-600" : "bg-red-300"} 
          />
        </div>
      </div>
    </div>
  );
}
