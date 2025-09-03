"use client"

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from "recharts"
import { CardDescription } from "./ui/card"
type OrderData = {
  name: string
  value: number
  time: string
  orders: number
}

const data:OrderData[] = [
  { name: "Afternoon", value: 40, time: "1pm - 4pm", orders: 1890 },
  { name: "Evening", value: 32, time: "5pm - 8pm", orders: 1510 },
  { name: "Morning", value: 28, time: "8am - 12pm", orders: 1320 },
]

const COLORS = ["#5A6ACF", "#8593ED", "#C7CEFF"]

const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    const { name, time, orders } = payload[0].payload as {
      name: string
      time: string
      orders: number
    }
    return (
      <div className="relative rounded-md bg-[#37375C] p-5 w-[140px] shadow-lg border border-gray-700 text-white text-sm">
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#37375C] rotate-45 border border-gray-700"></div>
        <p className="font-medium">{name}</p>
        <p className="text-xs font-normal text-gray-400">{time}</p>
        <p className="font-medium text-base">{orders.toLocaleString()} orders</p>
      </div>
    )
  }
  return null
}

export function OrderChart() {
  return (
    <div className="h-[200px] w-full bg-transparent p-0 m-0 ">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={80}
            dataKey="value"
            
            
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <CardDescription>

      <div className="flex justify-center gap-10 text-sm text-muted-foreground">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            />
            <span>{entry.name} ({entry.value}%)</span>
          </div>
        ))}
      </div>
      </CardDescription>
    </div>
    

  )
}
