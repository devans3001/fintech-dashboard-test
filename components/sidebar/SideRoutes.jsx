import { sideRoutes } from "@/lib/helper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "../ui/separator";

export default function SideRoutes() {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <>
    <div className="flex-1 flex flex-col gap-3 px-3">
        <Separator  />
      {sideRoutes.map((ele) => (
        <Link
          key={ele.title}
          href={`${ele.path}`}
          className={`flex items-center gap-2 font-semibold text-[1em]  transition-all duration-200 ease-in-out ${
            pathname === ele.path ? "text-black" : "text-gray-400"
          }`}
          >
          {ele.title}
        </Link>
      ))}
    </div>
          </>
  );
}
