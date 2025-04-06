// components/finance.jsx
"use client";

import Box from "./Box";
import Header from "./Header";
import { useFinance } from "./useFinance";

export default function FinancialRecord() {
  const { totalExpense, totalSavings, totalIncome,percentageChange } = useFinance("financeTime");

  const {savings,expenses,income} = percentageChange;

  // console.log(percentageChange,"lol")
  return (
    <div className="h-full flex flex-col justify-between">
      <Header title="Financial Record" timeKey="financeTime" />
      <div className="flex-1 flex justify-between gap-2 flex-wrap">
        <Box
          title="Total Expenses"
          color={"bg-green-100"}
          icon={"text-green-800"}
          val={totalExpense}
          percent={expenses}
        />
        <Box
          title="Total Income"
          color={"bg-red-100"}
          icon={"text-red-800"}
          val={totalIncome}
          percent={income}

        />
        <Box
          title="Total Saving"
          color={"bg-blue-100"}
          icon={"text-blue-800"}
          val={totalSavings}
          percent={savings}
          
        />
      </div>
    </div>
  );
}
