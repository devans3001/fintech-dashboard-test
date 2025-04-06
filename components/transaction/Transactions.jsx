"use client"
import { useDashboard } from "@/app/context/Dashboard";
import Header from "../financialRecord/Header";
import Transaction from "@/components/transaction/Transaction"
import { useFinance } from "../financialRecord/useFinance";


export default function Transactions() {

  const {accountTypes} = useDashboard()
  const {filterData} = useFinance("transactionTime")

  const accType = accountTypes.accountType
  return (
    <div className="h-full flex gap-4 flex-col bg-white rounded-[25px] p-4 border-2 border-gray-200 ">  
        <Header title={"Transactions"} myClass={"text-sm"} timeKey="transactionTime"/>

    <div className="flex-1">
       { filterData.map(ele=>(<Transaction key={ele.id} tranc={ele} accType={accType}/>))}
    </div>
    </div>
  );
}
