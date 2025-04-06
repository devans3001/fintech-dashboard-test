"use client";

import Header from "@/components/overview/Header";
import { useSession } from "next-auth/react";
import CardBalance from "../../components/overview/CardBalance";
import FinancialRecord from "@/components/financialRecord/FinancialRecord";
import MoneyFlowChart from "@/components/money-flow/MoneyFlow";
import Transactions from "@/components/transaction/Transactions";
import { useEffect } from "react";
import { useDashboard } from "../context/Dashboard";

export default function Overview() {
  const session = useSession();

  const name = session?.data?.user?.name.split(" ")[0];
  const {dispatch} = useDashboard()


  useEffect(()=>{
    dispatch({
      type: "ADD_USER_DETAILS",
      payload: {
        name: session?.data?.user?.name,
        email: session?.data?.user?.email,
      },
    })
  },[session?.data?.user?.name, session?.data?.user?.email, dispatch])

  return (
    <div className="flex gap-3 flex-col">
      <Header name={name} />

      <div className="flex-1 flex justify-between gap-3 min-h-0">
        <div className="flex-1 flex flex-col gap-4 min-h-0 h-auto">
          <div className=" flex-1 ">
            <CardBalance />
          </div>
          <div className="flex-1 text-white ">
            <FinancialRecord />
          </div>
          <div className="flex-2  hide-scrollbar ">
            <MoneyFlowChart />
            {/* <CompactFinancialChart/> */}
          </div>
        </div>

        <div className="  hidden md:block">
          <Transactions />
        </div>
      </div>
    </div>
  );
}
