"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple line chart";

const chartData = [
  { month: "January", totalUser: 186, activeUser: 80 },
  { month: "February", totalUser: 305, activeUser: 200 },
  { month: "March", totalUser: 237, activeUser: 120 },
  { month: "April", totalUser: 73, activeUser: 190 },
  { month: "May", totalUser: 209, activeUser: 130 },
  { month: "June", totalUser: 214, activeUser: 140 },
];

const chartConfig = {
  totalUser: {
    label: "Total User",
    color: "hsl(var(--chart-1))",
  },
  activeUser: {
    label: "Active User",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function MultiLineChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart - Multiple</CardTitle>
        <CardDescription>January - December 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
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
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="totalUser"
              type="monotone"
              stroke="var(--color-totalUser)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="activeUser"
              type="monotone"
              stroke="var(--color-activeUser)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              Showing total visitors for the last 6 months
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
