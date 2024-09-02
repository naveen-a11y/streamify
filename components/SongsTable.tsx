"use client";

import { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "./ui/table";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ChartData } from "@/type";
import { chartData } from "@/data/sample-data";

export default function SongsTable() {
  const [sort, setSort] = useState({ column: "streamCount", order: "desc" });
  const [filter, setFilter] = useState({ column: "songName", value: "" });

  //   Filter data based on filter column and value

  const filteredData = useMemo(() => {
    if (filter.column && filter.value) {
      return chartData.filter((row) => {
        const value = row[filter.column as keyof ChartData];
        if (typeof value === "string") {
          return value.toLowerCase().includes(filter.value.toLowerCase());
        } else {
          return value === +filter.value;
        }
      });
    } else {
      return chartData;
    }
  }, [filter]);

  //   Sort data based on sort column and order

  const sortedData = useMemo(() => {
    const sorted = [...filteredData];
    sorted.sort((a, b) => {
      if (sort.order === "asc") {
        return a[sort.column as keyof ChartData] >
          b[sort.column as keyof ChartData]
          ? 1
          : -1;
      } else {
        return a[sort.column as keyof ChartData] <
          b[sort.column as keyof ChartData]
          ? 1
          : -1;
      }
    });
    return sorted;
  }, [sort, filteredData]);

  //   Handle sort event

  const handleSort = (column: string) => {
    setSort((prevSort) => ({
      column,
      order: prevSort.order === "asc" ? "desc" : "asc",
    }));
  };

  //   Handle filter event

  const handleFilter = (column: string, value: string) => {
    setFilter({ column, value });
  };

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <Input
          type="text"
          placeholder="Filter by song name or artist"
          value={filter.value}
          className="w-1/4"
          onChange={(e) => handleFilter(filter.column, e.target.value)}
        />
        <Select
          value={filter.column}
          onValueChange={(column) => handleFilter(column, filter.value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Column" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="songName">Song Name</SelectItem>
              <SelectItem value="artist">Artist</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead onClick={() => handleSort("songName")}>
              Song Name
            </TableHead>
            <TableHead onClick={() => handleSort("artist")}>Artist</TableHead>
            <TableHead onClick={() => handleSort("dateStreamed")}>
              Date Streamed
            </TableHead>
            <TableHead onClick={() => handleSort("streamCount")}>
              Stream Count
            </TableHead>
            <TableHead onClick={() => handleSort("userId")}>User ID</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.songName}</TableCell>
              <TableCell>{row.artist}</TableCell>
              <TableCell>{row.dateStreamed}</TableCell>
              <TableCell>{row.streamCount}</TableCell>
              <TableCell>{row.userId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
