"use client";

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "18-24", value: 31.47, fill: "#8884d8" },
  { name: "25-29", value: 26.69, fill: "#83a6ed" },
  { name: "30-34", value: 15.69, fill: "#8dd1e1" },
  { name: "35-39", value: 8.22, fill: "#82ca9d" },
  { name: "40-49", value: 8.63, fill: "#a4de6c" },
  { name: "50+", value: 2.63, fill: "#d0ed57" },
  { name: "Unknown", value: 6.67, fill: "#ffc658" },
];

const legendStyle = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export default function CompactFinancialChart() {
  return (
    <div className="h-full min-h-0 flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-4">
      <h2 className="text-lg font-semibold mb-2">Financial Overview</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar minAngle={15} label={{ position: "insideStart", fill: "#fff" }} background clockWise dataKey="value" />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={legendStyle} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
