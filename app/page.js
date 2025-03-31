"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard"); // Redirect to dashboard if logged in
    } else if (status === "unauthenticated") {
      router.replace("/auth/login"); // Redirect to login if not authenticated
    }
  }, [status, router]);

  if (status === "loading") return <p>Loading...</p>;

  return null; // No content needed since it redirects
}
