"use client";

import {
  ChartContainer,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#4ade80", // green
  },
};

export default function Home() {
  return (
    <main>
      <ChartContainer config={chartConfig}>
        <ChartLegendContent />
      </ChartContainer>
    </main>
  );
}
