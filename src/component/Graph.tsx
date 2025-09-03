"use client";
import {
  CardContent,
} from "@/component/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "01", last6days: 200, lastWeek: 300 },
  { day: "02", last6days: 150, lastWeek: 250 },
  { day: "03", last6days: 300, lastWeek: 280 },
  { day: "04", last6days: 280, lastWeek: 320 },
  { day: "05", last6days: 180, lastWeek: 290 },
  { day: "06", last6days: 400, lastWeek: 310 },
];

export default function Graph() {
  return (
    
      <CardContent className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="44" vertical={false} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} interval={0}  padding={{ left: 10, right: 10 }} 
 />
            <YAxis hide />
            <Tooltip />
            <Line
              type="linear"
              dataKey="lastWeek"
              stroke="#E6E8EC"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="linear"
              dataKey="last6days"
              stroke="#5A6ACF"
              strokeWidth={3}
              dot={false}
            />  
          </LineChart>
        </ResponsiveContainer>
        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#5A6ACF] rotate-[16.57 deg]"></span>
            Last 6 days
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-gray-400 "></span>
            Last Week
          </span>
        </div>
      </CardContent>
  );
}
