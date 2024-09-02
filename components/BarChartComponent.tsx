"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

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
import { chartData } from "@/data/sample-data";

export const description = "A bar chart with a custom label";

const chartConfig = {
  streams: {
    label: "Streams",
    color: "hsl(var(--chart-1))",
  },
  label: {
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

export default function BarChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 5 Most Streamed Songs</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData.slice(0, 5)}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="songName"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
              hide
            />
            <XAxis dataKey="streamCount" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="streamCount"
              layout="vertical"
              fill="var(--color-streams)"
              radius={4}
            >
              <LabelList
                dataKey="songName"
                position="insideLeft"
                offset={8}
                className="fill-[--color-label]"
                fontSize={12}
              />
              <LabelList
                dataKey="streamCount"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Total streams:{" "}
          {chartData
            .slice(0, 5)
            .reduce((acc, curr) => acc + curr.streamCount, 0)}
        </div>
        <div className="leading-none text-muted-foreground">
          Showing top 5 most streamed Bollywood songs
        </div>
      </CardFooter>
    </Card>
  );
}
