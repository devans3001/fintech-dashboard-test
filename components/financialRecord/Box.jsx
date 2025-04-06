import { formatMoney } from "@/lib/helper";
import { Percent } from "lucide-react";
import { IoIosArrowRoundUp,IoIosArrowRoundDown } from "react-icons/io";

export default function Box({ color,icon="text-black",title,val,percent }) {

  const isPositive = percent >= 0;
  return (
    <div
      className={`flex-1 flex flex-col justify-around px-6 py-3 ${color} text-black rounded-[20px]`}
    >
      <div>
        <h4 className="text-gray-700">{title}</h4>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">{formatMoney(`${val}`,0)}</h1>
        <h4 className="flex items-center gap-1">
           {isPositive ? <IoIosArrowRoundUp className={`${icon}`} />  : <IoIosArrowRoundDown className={`${icon}`} /> }
          <span>{Math.abs(percent)}%</span>
        </h4>
      </div>
    </div>
  );
}
