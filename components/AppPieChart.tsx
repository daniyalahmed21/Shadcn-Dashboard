"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart showing sales distribution by source.";

const chartData = [
  { source: "organic", orders: 450, fill: "var(--color-organic)" },
  { source: "social", orders: 215, fill: "var(--color-social)" },
  { source: "paid", orders: 320, fill: "var(--color-paid)" },
  { source: "direct", orders: 140, fill: "var(--color-direct)" },
  { source: "referral", orders: 95, fill: "var(--color-referral)" },
];

const chartConfig = {
  orders: {
    label: "Orders",
  },
  organic: {
    label: "Organic Search",
    color: "var(--chart-1)",
  },
  social: {
    label: "Social Media",
    color: "var(--chart-2)",
  },
  paid: {
    label: "Paid Ads",
    color: "var(--chart-3)",
  },
  direct: {
    label: "Direct",
    color: "var(--chart-4)",
  },
  referral: {
    label: "Referral",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

export function SalesBySourceChart() {
  const totalOrders = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.orders, 0);
  }, []);

  return (
    <div>
      <h1 className="font-medium text-lg mb-6">Sales by Traffic Source</h1>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Pie
            data={chartData}
            dataKey="orders"
            nameKey="source"
            innerRadius={60}
            strokeWidth={5}
          >
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {totalOrders.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Orders
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
      <div className="flex flex-col gap-2 mt-4 items-center">
        {/* 7. Updated the trending and description text to be relevant */}
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total orders for the last 30 days
        </div>
      </div>
    </div>
  );
}