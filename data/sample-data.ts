import { ChartData } from "@/type";
import Card from "@/assets/card.svg";
import Graph from "@/assets/graph.svg";
import Dollar from "@/assets/dollar.svg";
import Users from "@/assets/users.svg";

export const chartData: ChartData[] = [
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

export const reports = [
  {
    id: 1,
    title: "Total Users",
    value: "+12,234",
    change: "+19% from last month",
    icon: Card,
  },
  {
    id: 2,
    title: "Active Users",
    value: "+573",
    change: "+201 since last 30 days",
    icon: Users,
  },
  {
    id: 3,
    title: "Total Streams",
    value: "+2350",
    change: "+180.1% from last month",
    icon: Graph,
  },
  {
    id: 4,
    title: "Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
    icon: Dollar,
  },
  {
    id: 5,
    title: "Top Artist",
    value: "Arijit Singh",
    change: "since last 30 days",
    icon: Graph,
  },
];
