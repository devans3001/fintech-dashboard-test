"use client";
import { useDashboard } from "@/app/context/Dashboard";
import { useSearchParamsHook } from "@/hooks/useCustomHooks";
import { formatMoney } from "@/lib/helper";
import { PiHandWithdraw, PiHandDeposit } from "react-icons/pi";

export default function CardBalance() {

  const {getParam} = useSearchParamsHook()
  
  const val = getParam("accType") || "savings";

  const { accountTypes} = useDashboard(val);
  
  

const balance = accountTypes?.balance || 0; 
  // console.log(balance) 
  return (
    <div className="w-full h-full rounded-2xl gap-2 bg-black text-white p-3 flex flex-col md:justify-between">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-medium">Card 1234****4567</h4>
        <p>Graph part</p>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg md:text-3xl md:font-bold">
          {formatMoney(balance)}
        </h1>

        <div className="flex gap-2">
          {/* Deposit Button - Primary CTA */}
          <button
            className="flex items-center gap-1.5 px-3 py-1.5 md:gap-2 md:px-4 md:py-2 
               bg-white text-black rounded-full border border-white
               text-xs md:text-sm leading-tight transition-all hover:scale-[1.02]
               active:scale-95 focus-visible:outline md:focus-visible:outline-2 
               focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            aria-label="Make a deposit"
          >
            <PiHandDeposit className="text-base md:text-lg shrink-0" />
            <span className="whitespace-nowrap">Deposit</span>
          </button>

          {/* Withdraw Button - Secondary CTA */}
          <button
            className="flex items-center gap-1.5 px-3 py-1.5 md:gap-2 md:px-4 md:py-2 
               bg-transparent text-white rounded-full border border-white
               text-xs md:text-sm leading-tight transition-all hover:bg-white/10
               active:scale-95 focus-visible:outline md:focus-visible:outline-2 
               focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            aria-label="Make a withdrawal"
          >
            <PiHandWithdraw className="text-base md:text-lg shrink-0" />
            <span className="whitespace-nowrap">Withdraw</span>
          </button>
        </div>
      </div>
    </div>
  );
}
