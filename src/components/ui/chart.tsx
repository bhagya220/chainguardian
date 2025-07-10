"use client";

import * as React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";
import { cn } from "@/lib/utils";
import { Theme } from "lucide-react";
import { useTheme } from "next-themes";

// Define the shape of a single chart data point
type ChartData = {
  name: string;
  total: number;
}

// Define the props for the Chart component
interface ChartProps {
  data: ChartData[];
}

// Tooltip custom props (based on Recharts)
interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    value: number | string;
  }[];
  label?: string | number;
  labelClassName?: string;
  formatter?: (value: string | number) => string;
}

// Custom Tooltip component
function CustomTooltip({
  active,
  payload,
  label,
  formatter,
  labelClassName = "",
}: CustomTooltipProps) {
  if (!active || !payload || !payload.length) {
    return null;
  }

  const value = payload[0].value;

  return (
    <div className={cn("font-medium", labelClassName)}>
      {formatter ? formatter(value) : value}
    </div>
  );
}

// Main Chart component
export function Chart({ data }: ChartProps) {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke={theme === "dark" ? "#ffffff" : "#000000"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke={theme === "dark" ? "#ffffff" : "#000000"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value: number) => `${value}`}
        />
        <Tooltip
          content={
            <CustomTooltip
              formatter={(value) => `Value: ${value}`}
              labelClassName="text-muted-foreground"
            />
          }
        />
        <Bar
          dataKey="total"
          fill={theme === "dark" ? "#2563eb" : "#3b82f6"}
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
