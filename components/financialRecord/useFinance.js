import {
    subWeeks, subMonths, subYears,
    startOfWeek, endOfWeek,
    startOfMonth, endOfMonth,
    startOfYear, endOfYear,
    isWithinInterval, parseISO, format
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
  
      const totals = transactions.reduce((txAcc, tx) => {
        const txDate = parseISO(tx.date);
        if (isWithinInterval(txDate, dateRange)) {
          if (tx.type === "credit") {
            txAcc.totalCredits += tx.amount;
          } else if (tx.type === "debit") {
            txAcc.totalDebits += tx.amount;
          }
        }
        return txAcc;
      }, { totalDebits: 0, totalCredits: 0 });
  
      acc[accountType] = {
        ...totals,
        actualBalance: balance,
        netBalance: totals.totalCredits - totals.totalDebits,
      };
  
      return acc;
    }, {});
  }
  
  function getPercentageChange(current, previous) {
    if (previous === 0) return current === 0 ? 0 : 100;
    return Math.round(((current - previous) / previous) * 100);
  }
  
  function groupTransactionsByPeriod(accounts, period) {
    const groupMap = {};
  
    for (const account of accounts) {
      const { transactions = [], accountType } = account;
  
      for (const tx of transactions) {
        const txDate = parseISO(tx.date);
  
        if (!isWithinInterval(txDate, getDateRange(period, true))) continue;
  
        let keyDate;
        if (period === "yearly") {
          keyDate = new Date(txDate.getFullYear(), txDate.getMonth());
        } else {
          keyDate = new Date(txDate.getFullYear(), txDate.getMonth(), txDate.getDate());
        }
  
        const key = keyDate.toISOString();
        if (!groupMap[key]) {
          groupMap[key] = {
            dateObj: keyDate,
            saving: 0,
            expense: 0,
            income: 0,
          };
        }
  
        if (tx.type === "credit") {
            if(accountType === "income") groupMap[key].income += tx.amount;
            if(accountType === "savings") groupMap[key].saving += tx.amount;
        } else if (tx.type === "debit") {
          if (accountType === "expenses") groupMap[key].expense += tx.amount;
          if (accountType === "savings") groupMap[key].saving += tx.amount;
        }
      }
    }
  
    const grouped = Object.values(groupMap)
      .sort((a, b) => a.dateObj - b.dateObj)
      .map((entry) => ({
        date:
          period === "yearly"
            ? format(entry.dateObj, "MMM")
            : format(entry.dateObj, "dd MMM"),
        saving: entry.saving,
        expense: entry.expense,
        income: entry.income,
      }));
  
    return grouped;
  }

  function getTransactions(accountTypes, period) {
    const transactions = accountTypes.transactions; // Get all transactions from accountTypes
    const dateRange = getDateRange(period, true); // Get the current date range based on the period
    const accountType = accountTypes.accountType; // Get the selected account type from accountTypes
    
  
    const filteredTransactions = transactions.filter((tx) => {
      const txDate = parseISO(tx.date); // Parse the transaction date
  
  
      if (!isWithinInterval(txDate, dateRange)) {
        return false;
      }
  
    
  
      return true; // If all filters pass, include the transaction
    });
  
  
    return filteredTransactions; // Return the filtered transactions
  }
  
  
  
  
  export function useFinance(paramKey = "timeFrame") {
    const { accounts,accountTypes } = useDashboard();
    const { getParam } = useSearchParamsHook();
    const period = getParam(paramKey) || "monthly";
  
    const { accountTotals, percentageChange, groupedData ,filterData} = useMemo(() => {
      if (!accounts || accounts.length === 0)
        return { accountTotals: {}, percentageChange: {}, groupedData: [] };
  
      const currentRange = getDateRange(period, true);
      const previousRange = getDateRange(period, false);
  
      const currentTotals = calculateTotals(accounts, currentRange);
      const previousTotals = calculateTotals(accounts, previousRange);
      const groupedData = groupTransactionsByPeriod(accounts, period);
      const filterData = getTransactions(accountTypes, period);
  
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
  
      return { accountTotals: currentTotals, percentageChange, groupedData, filterData };
    }, [accounts, period,accountTypes]);
  
    const totalSavings = accountTotals?.savings?.totalDebits || 0;
    const totalExpense = accountTotals?.expenses?.totalDebits || 0;
    const totalIncome = accountTotals?.income?.totalCredits || 0;
  
    return {
      accountTotals,
      percentageChange,
      totalSavings,
      totalIncome,
      totalExpense,
      groupedData,
      filterData
    };
  }
  