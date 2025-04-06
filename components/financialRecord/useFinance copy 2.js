import {
    subWeeks,
    subMonths,
    subYears,
    startOfWeek,
    endOfWeek,
    startOfMonth,
    endOfMonth,
    startOfYear,
    endOfYear,
    isWithinInterval,
    parseISO
  } from "date-fns";
  import { useDashboard } from "@/app/context/Dashboard";
  import { useSearchParamsHook } from "@/hooks/useCustomHooks";
  import { useMemo } from "react";
  
  function getDateRange(period, current = true) {
    const now = new Date();
    let start, end;
  
    switch (period) {
      case "weekly":
        const refWeek = current ? now : subWeeks(now, 1);
        start = startOfWeek(refWeek);
        end = endOfWeek(refWeek);
        break;
      case "yearly":
        const refYear = current ? now : subYears(now, 1);
        start = startOfYear(refYear);
        end = endOfYear(refYear);
        break;
      case "monthly":
      default:
        const refMonth = current ? now : subMonths(now, 1);
        start = startOfMonth(refMonth);
        end = endOfMonth(refMonth);
    }
  
    return { start, end };
  }
  
  function calculateTotals(accounts, dateRange) {
    return accounts.reduce((acc, account) => {
      const { transactions = [], accountType, balance } = account;
  
      const totals = transactions.reduce(
        (transactionAcc, tx) => {
          const txDate = parseISO(tx.date);
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
        actualBalance: balance,
        netBalance: totals.totalCredits - totals.totalDebits,
      };
  
      return acc;
    }, {});
  }
  
  function getPercentageChange(current, previous) {
    if (previous === 0) return 100;
    return Math.round(((current - previous) / previous) * 100);
  }
  
  export function useFinance(paramKey = "timeFrame") {
    const { accounts } = useDashboard();
    const { getParam } = useSearchParamsHook();
    const period = getParam(paramKey) || "monthly";
  
    const { accountTotals, percentageChange } = useMemo(() => {
      if (!accounts || accounts.length === 0) return { accountTotals: {}, percentageChange: {} };
  
      const currentRange = getDateRange(period, true);
      const previousRange = getDateRange(period, false);
  
      const currentTotals = calculateTotals(accounts, currentRange);
      const previousTotals = calculateTotals(accounts, previousRange);
  
      const percentageChange = {
        savings: getPercentageChange(
          currentTotals?.savings?.totalDebits || 0,
          previousTotals?.savings?.totalDebits || 0
        ),
        expenses: getPercentageChange(
          currentTotals?.expenses?.totalDebits || 0,
          previousTotals?.expenses?.totalDebits || 0
        ),
        income: getPercentageChange(
          currentTotals?.income?.totalCredits || 0,
          previousTotals?.income?.totalCredits || 0
        ),
      };
  
      return { accountTotals: currentTotals, percentageChange };
    }, [accounts, period]);
  
    const totalSavings = accountTotals?.savings?.totalDebits || 0;
    const totalExpense = accountTotals?.expenses?.totalDebits || 0;
    const totalIncome = accountTotals?.income?.totalCredits || 0;
  
    return {
      accountTotals,
      percentageChange,
      totalSavings,
      totalIncome,
      totalExpense,
    };
  }
  