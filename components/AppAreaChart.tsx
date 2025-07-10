"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description =
  "A stacked area chart showing daily cart additions vs. completed orders.";

// 1. Replaced mock monthly data with more granular daily data for the last 15 days.
const chartData = [
  { date: "2025-05-24", itemsAddedToCart: 210, ordersCompleted: 130 },
  { date: "2025-05-25", itemsAddedToCart: 250, ordersCompleted: 155 },
  { date: "2025-05-26", itemsAddedToCart: 225, ordersCompleted: 140 },
  { date: "2025-05-27", itemsAddedToCart: 280, ordersCompleted: 190 },
  { date: "2025-05-28", itemsAddedToCart: 260, ordersCompleted: 160 },
  { date: "2025-05-29", itemsAddedToCart: 310, ordersCompleted: 185 },
  { date: "2025-05-30", itemsAddedToCart: 290, ordersCompleted: 200 },
  { date: "2025-05-31", itemsAddedToCart: 350, ordersCompleted: 240 },
  { date: "2025-06-01", itemsAddedToCart: 330, ordersCompleted: 210 },
  { date: "2025-06-02", itemsAddedToCart: 240, ordersCompleted: 150 },
  { date: "2025-06-03", itemsAddedToCart: 220, ordersCompleted: 130 },
  { date: "2025-06-04", itemsAddedToCart: 360, ordersCompleted: 250 },
  { date: "2025-06-05", itemsAddedToCart: 380, ordersCompleted: 290 },
  { date: "2025-06-06", itemsAddedToCart: 420, ordersCompleted: 310 },
  { date: "2025-06-07", itemsAddedToCart: 390, ordersCompleted: 280 },
];


// 2. Updated chart config to reflect the new e-commerce metrics.
const chartConfig = {
  itemsAddedToCart: {
    label: "Added to Cart",
    color: "var(--chart-2)",
  },
  ordersCompleted: {
    label: "Orders Completed",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function DailyActivityChart() {
  return (
    <div>
      <h1 className="font-medium text-lg mb-6">Daily Funnel Activity</h1>
      <ChartContainer config={chartConfig}>
        <AreaChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });
            }}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          {/* 5. Updated gradient definitions with new IDs and color variables */}
          <defs>
            <linearGradient id="fillOrders" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-ordersCompleted)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-ordersCompleted)"
                stopOpacity={0.1}
              />
            </linearGradient>
            <linearGradient id="fillCarts" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="var(--color-itemsAddedToCart)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="var(--color-itemsAddedToCart)"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          {/* 6. Updated Area components with new dataKeys and fill URLs */}
          <Area
            dataKey="itemsAddedToCart"
            type="natural"
            fill="url(#fillCarts)"
            fillOpacity={0.4}
            stroke="var(--color-itemsAddedToCart)"
            stackId="a"
          />
          <Area
            dataKey="ordersCompleted"
            type="natural"
            fill="url(#fillOrders)"
            fillOpacity={0.4}
            stroke="var(--color-ordersCompleted)"
            stackId="a"
          />
        </AreaChart>
      </ChartContainer>
    </div>
  );
}