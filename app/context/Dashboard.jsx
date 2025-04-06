import { db } from "@/lib/db";
import React, { createContext, useContext, useReducer } from "react";
import { useSearchParamsHook } from "@/hooks/useCustomHooks";

const DashboardContext = createContext();

const initialState = [...db];

function dashboardReducer(state, action) {
  switch (action.type) {
    case "ADD_USER_DETAILS":
      const { name, email } = action.payload;
      return state.map((ele) => ({
        ...ele,
        name,
        email,
      }));

    default:
      return state;
  }
}

export default function DashboardProvider({ children }) {
  const [data, dispatch] = useReducer(dashboardReducer, initialState);

  const { getParam } = useSearchParamsHook();
  const acc = getParam("accType") || "savings";

  const accounts = data?.flatMap((item) => item.accounts || []);
  const accountTypes = accounts.find((account) => account.accountType === acc);
  return (
    <DashboardContext.Provider
      value={{ data, accounts, accountTypes, dispatch }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

// 4. Custom hook
export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within a TodoProvider");
  }
  return context;
}
