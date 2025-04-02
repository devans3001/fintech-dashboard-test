"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserProfile() {
  const session = useSession();
  const { name, image: img } = session?.data?.user || { 
    name: "User", 
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600" 
  };

  return (
    <div className="mx-auto text-center my-5">
      <div className="relative w-[60px] h-[60px] mx-auto rounded-[50%] overflow-hidden">
        <Image
          src={img}
          alt="Profile Picture"
          fill
          className="object-cover rounded-full"
        />
      </div>
      <p className="mt-2 font-bold text-[1.2em]">{name}</p>
    </div>
  );
}