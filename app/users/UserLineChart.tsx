"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "An interactive line chart showing revenue and profit."

// 1. Replaced generic data with realistic e-commerce data (revenue and profit).
const chartData = [
  // ... (Using a subset for brevity, the full 3-month data would go here)
  { date: "2025-04-01", revenue: 2220, profit: 890 },
  { date: "2025-04-02", revenue: 970, profit: 340 },
  { date: "2025-04-03", revenue: 1670, profit: 670 },
  { date: "2025-04-04", revenue: 2420, profit: 980 },
  { date: "2025-04-05", revenue: 3730, profit: 1530 },
  { date: "2025-04-06", revenue: 3010, profit: 1210 },
  { date: "2025-04-07", revenue: 2450, profit: 990 },
  { date: "2025-05-01", revenue: 1650, profit: 680 },
  { date: "2025-05-02", revenue: 2930, profit: 1250 },
  { date: "2025-05-03", revenue: 2470, profit: 1010 },
  { date: "2025-05-04", revenue: 3850, profit: 1640 },
  { date: "2025-05-05", revenue: 4810, profit: 2100 },
  { date: "2025-05-06", revenue: 4980, profit: 2250 },
  { date: "2025-06-01", revenue: 1780, profit: 720 },
  { date: "2025-06-02", revenue: 4700, profit: 2050 },
  { date: "2025-06-03", revenue: 1030, profit: 410 },
  { date: "2025-06-04", revenue: 4390, profit: 1890 },
  { date: "2025-06-05", revenue: 880, profit: 320 },
  { date: "2025-06-06", revenue: 2940, profit: 1280 },
  { date: "2025-06-07", revenue: 3230, profit: 1410 },
  { date: "2025-06-08", revenue: 3850, profit: 1670 },
]

// 2. Updated chart config for the new metrics.
const chartConfig = {
  profit: {
    label: "Profit",
    color: "var(--chart-2)",
  },
  revenue: {
    label: "Revenue",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function SalesPerformanceChart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("revenue")

  const total = React.useMemo(
    () => ({
      revenue: chartData.reduce((acc, curr) => acc + curr.revenue, 0),
      profit: chartData.reduce((acc, curr) => acc + curr.profit, 0),
    }),
    []
  )

  return (
    <Card className="py-4 sm:py-0">
      <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pb-3 sm:pb-0">
          {/* 3. Updated title and description. */}
          <CardTitle>Sales Performance</CardTitle>
          <CardDescription>
            Showing total revenue and profit for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {/* 4. Mapped over the new keys for the interactive toggle. */}
          {(Object.keys(chartConfig) as Array<keyof typeof chartConfig>).map(
            (key) => {
              return (
                <button
                  key={key}
                  data-active={activeChart === key}
                  className="data-[active=true]:bg-muted/50 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-t-0 sm:border-l sm:px-8 sm:py-6"
                  onClick={() => setActiveChart(key)}
                >
                  <span className="text-muted-foreground text-xs">
                    {chartConfig[key].label}
                  </span>
                  <span className="text-lg leading-none font-bold sm:text-3xl">
                    {/* 5. Formatted totals as currency. */}
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      notation: "compact",
                    }).format(total[key])}
                  </span>
                </button>
              )
            }
          )}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
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
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  // 6. Formatted tooltip values as currency.
                  formatter={(value, name) => (
                    <div className="flex flex-col">
                      <span className="text-muted-foreground">{chartConfig[name as keyof typeof chartConfig].label}</span>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(Number(value))}
                    </div>
                  )}
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}