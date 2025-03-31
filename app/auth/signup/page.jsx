"use client";

import { useState } from "react";

import { useSession, signIn as Lover } from "next-auth/react";
import AuthPage from "../AuthPage";
// import animationData from "";

export default function AuthLayout() {
  const [darkMode, setDarkMode] = useState(false);

  const session = useSession();

  return (
    <div className={`flex h-screen ${darkMode ? "bg-gray-900" : "bg-white"}`}>
      {/* Left Side - Animation */}

      {/* Right Side - Auth Form */}
      <AuthPage type="signup" darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
