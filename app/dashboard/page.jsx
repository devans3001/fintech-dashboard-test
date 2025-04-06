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
    <>
      <Header name={name} />

     <div className="grid grid-cols-1 md:grid-cols-[3fr_25%] gap-2 flex-grow min-h-0">
             <div className="grid grid-rows-[35%,35%,auto] gap-2 min-h-0 h-auto">
               <div className=" overflow-auto ">
                 <CardBalance />
               </div>
               <div className="overflow-auto text-white">
                 <FinancialRecord />
               </div>
               <div className="overflow-auto hide-scrollbar ">
                 <MoneyFlowChart/>
                 {/* <CompactFinancialChart/> */}
               </div>
             </div>
     
             <div className=" overflow-auto hidden md:block truncate">
               <Transactions/>
             </div>
           </div>
    </>
  );
}
