import { formatMoney } from "@/lib/helper";
import { PiHandWithdraw, PiHandDeposit } from "react-icons/pi";

export default function CardBalance() {
  return (
    <div className="w-full h-full rounded-2xl bg-black text-white p-6 flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-medium">Card</h4>
        <p>Graph part</p>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">{formatMoney("1,400,000")}</h1>
        
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full border-2 border-white text-sm">
            <PiHandDeposit className="text-lg" />
            <span>Deposit</span>
          </button>
          <button className="flex items-center gap-2 bg-transparent text-white px-4 py-2 rounded-full border-2 border-white text-sm">
            <PiHandWithdraw className="text-lg" />
            <span>Withdraw</span>
          </button>
        </div>
      </div>
    </div>
  );
}