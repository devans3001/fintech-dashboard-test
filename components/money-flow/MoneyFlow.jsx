"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import Header from "../financialRecord/Header";
import { useFinance } from "../financialRecord/useFinance";

const data = [
  { date: "04 Se, Mo", saving: 1200, expense: 800, income: 2000 },
  { date: "05 Se, Tu", saving: 2200, expense: 1000, income: 3200 },
  { date: "06 Se, We", saving: 1800, expense: 1200, income: 3000 },
  { date: "07 Se, Th", saving: 2280, expense: 1600, income: 3880 },
  { date: "08 Se, Fr", saving: 2500, expense: 1700, income: 4200 },
  { date: "09 Se, Sa", saving: 2600, expense: 1800, income: 4400 },
];

export default function MoneyFlowChart() {

  const { groupedData } = useFinance("moneyTime");

  return (
    <div className="p-4 bg-white rounded-lg h-full scrollbar-hide">
     <Header title="Money Chart" timeKey="moneyTime"/>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={groupedData}
          margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#f0f0f0"
          />
          <XAxis
            dataKey="date"
            tick={{ fill: "#666", fontSize: 12 }}
            axisLine={false}
          />
          <YAxis
            tick={{ fill: "#666", fontSize: 12 }}
            axisLine={false}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            contentStyle={{
              background: "#fff",
              border: "1px solid #eee",
              borderRadius: "6px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
            formatter={(value, name) => [`$${value}`, name]}
            labelStyle={{ fontWeight: "bold" }}
          />
          <Legend
            wrapperStyle={{ paddingTop: "20px" }}
            formatter={(value) => (
              <span className="text-sm capitalize">{value}</span>
            )}
          />
           <Line
            type="monotone"
            dataKey="expense"
            stroke="#10b981"
            strokeWidth={2}
            dot={false}
            strokeDasharray="5 5"
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
         
          <Line
            type="monotone"
            dataKey="saving"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
           <Line
            type="monotone"
            dataKey="income"
            stroke="#ef4444"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, strokeWidth: 0 }}
          />
         
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
