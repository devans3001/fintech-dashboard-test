"use client";

import Header from "@/components/overview/Header";
import { useSession } from "next-auth/react";
import CardBalance from "./(components)/CardBalance";
import FinancialRecord from "@/components/financialRecord/FinancialRecord";
import MoneyFlowChart from "@/components/money-flow/MoneyFlow";
import CompactFinancialChart from "@/components/money-flow/RadialFlow";

export default function Overview() {
  const session = useSession();

  const name = session?.data?.user?.name.split(" ")[0];

  return (
    <>
      <Header name={name} />

      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-2 flex-grow min-h-0">
        <div className="grid grid-rows-3 gap-2 min-h-0 h-auto">
          <div className=" overflow-auto ">
            <CardBalance />
          </div>
          <div className="overflow-auto text-white">
            <FinancialRecord />
          </div>
          <div className="bg-black overflow-auto">
            <MoneyFlowChart/>
            {/* <CompactFinancialChart/> */}
          </div>
        </div>

        <div className="bg-black overflow-auto">TRAN</div>
      </div>
    </>
  );
}
