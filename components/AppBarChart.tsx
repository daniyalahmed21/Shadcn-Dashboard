"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// 1. Replaced generic data with realistic revenue from new vs. returning customers
const chartData = [
  { month: "January", new: 18600, returning: 21400 },
  { month: "February", new: 20500, returning: 30500 },
  { month: "March", new: 23200, returning: 24200 },
  { month: "April", new: 19800, returning: 17800 },
  { month: "May", new: 22100, returning: 28100 },
  { month: "June", new: 24900, returning: 22900 },
];

const chartConfig = {
  new: {
    label: "New Customers",
    color: "var(--chart-2)",
  },
  returning: {
    label: "Returning",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function MonthlyRevenueChart() {
  return (
    <div>
      <h1 className="font-medium text-lg mb-6">Total Revenue</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => `$${Number(value) / 1000}k`}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent

              />
            }
          />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="returning" fill="var(--color-returning)" radius={4} />
          <Bar dataKey="new" fill="var(--color-new)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}