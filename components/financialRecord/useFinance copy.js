import { useDashboard } from "@/app/context/Dashboard";
import { useSearchParamsHook } from "@/hooks/useCustomHooks";
import { useMemo } from "react";
import {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
  isWithinInterval,
  parseISO
} from "date-fns";

export function useFinance(paramKey = "timeFrame") {
    const { accounts } = useDashboard();
    const { getParam } = useSearchParamsHook();
    const period = getParam(paramKey) || "monthly"; // Use the passed paramKey

  const accountTotals = useMemo(() => {
    if (!accounts || accounts.length === 0) return {};



    const now = new Date();
    let dateRange;

    switch (period) {
      case "weekly":
        dateRange = { start: startOfWeek(now), end: endOfWeek(now) };
        break;
      case "yearly":
        dateRange = { start: startOfYear(now), end: endOfYear(now) };
        break;
      case "monthly":
      default:
        dateRange = { start: startOfMonth(now), end: endOfMonth(now) };
    }

    return accounts.reduce((acc, account) => {
      const { transactions = [], accountType, balance } = account;


      const totals = transactions.reduce(
        (transactionAcc, tx) => {
          const txDate = parseISO(tx.date);

        //   console.log(txDate, dateRange, isWithinInterval(txDate, dateRange), "txDate");
          if (isWithinInterval(txDate, dateRange)) {
            if (tx.type === "credit") {
              transactionAcc.totalCredits += tx.amount;
            } else if (tx.type === "debit") {
              transactionAcc.totalDebits += tx.amount;
            }
          }
          return transactionAcc;
        },
        { totalDebits: 0, totalCredits: 0 }
      );

      acc[accountType] = {
        ...totals,
        netBalance: totals.totalCredits - totals.totalDebits,
        actualBalance: balance,
        period,
        dateRange: {
          start: dateRange.start.toISOString(),
          end: dateRange.end.toISOString()
        }
      };

      return acc;
    }, {});
  }, [accounts, period]);

  const totalSavings = accountTotals?.savings?.totalDebits || 0;
  const totalExpense = accountTotals?.expenses?.totalDebits || 0;
  const totalIncome = accountTotals?.income?.totalCredits || 0;

  return {
    accountTotals,
    totalSavings,
    totalIncome,
    totalExpense
  };
}
