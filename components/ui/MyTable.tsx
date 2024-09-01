"use client";

import { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "./table";
import { Input } from "./input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

interface ChartData {
  songName: string;
  artist: string;
  dateStreamed: string;
  streamCount: number;
  userId: string;
}

const chartData: ChartData[] = [
  {
    songName: "Kal Ho Naa Ho",
    artist: "Sonu Nigam",
    dateStreamed: "2022-01-01",
    streamCount: 450,
    userId: "user1",
  },
  {
    songName: "Senorita",
    artist: "Shawn Mendes and Camila Cabello",
    dateStreamed: "2022-01-05",
    streamCount: 375,
    userId: "user2",
  },
  {
    songName: "Garmi",
    artist: "Badshah and Neha Kakkar",
    dateStreamed: "2022-01-10",
    streamCount: 325,
    userId: "user3",
  },
  {
    songName: "Shayad",
    artist: "Arijit Singh",
    dateStreamed: "2022-01-15",
    streamCount: 275,
    userId: "user4",
  },
  {
    songName: "Burj Khalifa",
    artist: "Shashi-DJ Khushi and Nikhita Gandhi",
    dateStreamed: "2022-01-20",
    streamCount: 225,
    userId: "user5",
  },
  {
    songName: "Tum Hi Ho",
    artist: "Arijit Singh",
    dateStreamed: "2022-01-25",
    streamCount: 200,
    userId: "user6",
  },
  {
    songName: "Despacito",
    artist: "Luis Fonsi ft. Daddy Yankee",
    dateStreamed: "2022-02-01",
    streamCount: 425,
    userId: "user7",
  },
  {
    songName: "Shape of You",
    artist: "Ed Sheeran",
    dateStreamed: "2022-02-05",
    streamCount: 400,
    userId: "user8",
  },
  {
    songName: "Havana",
    artist: "Camila Cabello ft. Young Thug",
    dateStreamed: "2022-02-10",
    streamCount: 350,
    userId: "user9",
  },
  {
    songName: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    dateStreamed: "2022-02-15",
    streamCount: 300,
    userId: "user10",
  },
  {
    songName: "Closer",
    artist: "The Chainsmokers ft. Halsey",
    dateStreamed: "2022-02-20",
    streamCount: 250,
    userId: "user11",
  },
  {
    songName: "We Found Love",
    artist: "Rihanna ft. Calvin Harris",
    dateStreamed: "2022-02-25",
    streamCount: 220,
    userId: "user12",
  },
  {
    songName: "Love Yourself",
    artist: "Justin Bieber",
    dateStreamed: "2022-03-01",
    streamCount: 200,
    userId: "user13",
  },
  {
    songName: "Sorry",
    artist: "Justin Bieber",
    dateStreamed: "2022-03-05",
    streamCount: 180,
    userId: "user14",
  },
  {
    songName: "What Do You Mean?",
    artist: "Justin Bieber",
    dateStreamed: "2022-03-10",
    streamCount: 160,
    userId: "user15",
  },
  {
    songName: "Hello",
    artist: "Adele",
    dateStreamed: "2022-03-15",
    streamCount: 140,
    userId: "user16",
  },
  {
    songName: "Someone Like You",
    artist: "Adele",
    dateStreamed: "2022-03-20",
    streamCount: 120,
    userId: "user17",
  },
  {
    songName: "Rolling in the Deep",
    artist: "Adele",
    dateStreamed: "2022-03-25",
    streamCount: 100,
    userId: "user18",
  },
  {
    songName: "Set Fire to the Rain",
    artist: "Adele",
    dateStreamed: "2022-04-01",
    streamCount: 90,
    userId: "user19",
  },
  {
    songName: "Skyfall",
    artist: "Adele",
    dateStreamed: "2022-04-05",
    streamCount: 80,
    userId: "user20",
  },
];

function MyTable() {
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

export default MyTable;
