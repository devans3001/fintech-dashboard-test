"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { date: "04 Se, Mo", saving: 1200, expense: 800 },
  { date: "05 Se, Tu", saving: 2200, expense: 1000 },
  { date: "06 Se, We", saving: 1800, expense: 1200 },
  { date: "07 Se, Th", saving: 2280, expense: 1600 },
  { date: "08 Se, Fr", saving: 2500, expense: 1700 },
  { date: "09 Se, Sa", saving: 2600, expense: 1800 },
];

export default function MoneyFlowChart() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Money Flow</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
          <XAxis dataKey="date" tick={{ fill: "#666" }} />
          <YAxis tick={{ fill: "#666" }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="saving" stroke="#000" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="expense" stroke="#f4a261" strokeWidth={2} dot={false} strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
