"use client"
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { useTransition } from "react";

export default function Dashboard() {
  const session =  useSession();

  const [isPending, startTransition] = useTransition();

  console.log(session);
  const handleLogout = async () => {

    startTransition(async () => {
      console.log("Logging out...");
      await signOut();
    });
  };
  return (
    <div>
      <p>Dashbaord</p>
      <form action={handleLogout}>
        <Button disabled={isPending}>
          {isPending ? "outing" : "Sign out"}
        </Button>
      </form>
    </div>
  );
}
