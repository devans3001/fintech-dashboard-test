import { formatMoney } from "@/lib/helper";
import { IoIosArrowRoundUp } from "react-icons/io";

export default function Box({ color,icon="text-black" }) {
  return (
    <div
      className={`flex-1 flex flex-col justify-around px-6 py-3 ${color} text-black rounded-[20px]`}
    >
      <div>
        <h4 className="text-gray-700">Title</h4>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">{formatMoney("85,324",0)}</h1>
        <h4 className="flex items-center gap-1">
            <IoIosArrowRoundUp className={`${icon}`} />
          <span>17%</span>
        </h4>
      </div>
    </div>
  );
}
