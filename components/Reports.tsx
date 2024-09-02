import { reports } from "@/data/sample-data";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

export default function Reports() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      {reports.map((item) => (
        <Card key={item.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <Image src={item.icon} alt="" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.value}</div>
            <p className="text-xs text-muted-foreground">{item.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
