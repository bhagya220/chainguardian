"use client"

import { ChartContainer, ChartLegendContent } from "@/components/ui/chart";

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#4f46e5", // Indigo-600
  },
  users: {
    label: "Users",
    color: "#22c55e", // Green-500
  },
};

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">📊 ChainGuardian Dashboard</h1>

      <ChartContainer config={chartConfig}>
        <ChartLegendContent
          payload={[
            { value: "Revenue", dataKey: "revenue", color: "#4f46e5" },
            { value: "Users", dataKey: "users", color: "#22c55e" },
          ]}
        />
      </ChartContainer>
    </main>
  );
}
