"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    // Only redirect when status is CERTAIN (not loading)
    if (status === "authenticated") {
      router.replace("/dashboard");
    } else if (status === "unauthenticated") {
      router.replace("/auth/login");
    }
    // No redirects while status === "loading"
  }, [status,router]);

  console.log(status,"home");

  if(status === "loading") return <div>Loading...</div>
  return null; // Renders nothing
}