import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { formatMoney } from "@/lib/helper";
import { format } from "date-fns";

export default function Transaction({ tranc, accType }) {
  const { sender, receiver, type,amount,date } = tranc;
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center bg-green-50 p-2">
        {type === "credit" ? (
          <GiReceiveMoney className={`text-green-300`} />
        ) : (
          <GiPayMoney className={`text-red-300`} />
        )}
      </div>

      <div className="flex-1 flex flex-col truncate">
        <p className="text-xl font-semibold truncate">
          { sender }
        </p>
        <p className="text-sm font-thin text-gray-500">
          {format(new Date(date), "dd MMM yyyy")}
        </p>
      </div>

      <p className="text-lg font-semibold">{formatMoney(`${amount}`, 0)}</p>
    </div>
  );
}
