"use client"

import { ChartConfig, ChartContainer } from "@/component/ui/chart"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis,Tooltip } from "recharts"

const chartData = [
  { month: "01", Last6days: 90, LastWeek: 50 },
  { month: "02", Last6days: 70, LastWeek: 90 },
  { month: "03", Last6days: 80, LastWeek: 40 },
  { month: "04", Last6days: 60, LastWeek: 80 },
  { month: "05", Last6days: 100, LastWeek: 50 },
  { month: "06", Last6days: 110, LastWeek: 50 },
  { month: "07", Last6days: 90, LastWeek: 50 },
  { month: "08", Last6days: 70, LastWeek: 90 },
  { month: "09", Last6days: 80, LastWeek: 40 },
  { month: "10", Last6days: 60, LastWeek: 80 },
  { month: "11", Last6days: 100, LastWeek: 70 },
  { month: "12", Last6days: 110, LastWeek: 50 },
]

const chartConfig = {
  Last6days: {
    label: "Last 6 days",
    color: "#5A6ACF",
  },
  LastWeek: {
    label: "Last Week",
    color: "#E6E8EC",
  },
} satisfies ChartConfig

export function Charts() {
  return (
    <ChartContainer config={chartConfig}>
      <div className="w-full">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData}
    barSize={20}
    barGap={8}
    barCategoryGap="20%"
    
>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              
            />
            <Tooltip />
            <Bar dataKey="Last6days" fill="var(--color-Last6days)" barSize={8} />
            <Bar dataKey="LastWeek" fill="var(--color-LastWeek)" barSize={8} />
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-4 flex gap-6 text-sm font-medium text-violet-500">
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: chartConfig.Last6days.color }}
            />
            <span>{chartConfig.Last6days.label}</span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: chartConfig.LastWeek.color }}
            />
            <span>{chartConfig.LastWeek.label}</span>
          </div>
        </div>
      </div>
    </ChartContainer>
  )
}
