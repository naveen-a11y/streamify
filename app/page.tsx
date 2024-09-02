import BarChartComponent from "@/components/BarChartComponent";
import { MultiLineChart } from "@/components/MultiLineChart";
import PieChartComponent from "@/components/PieChart";
import Reports from "@/components/Reports";
import SongsTable from "@/components/SongsTable";

export default function Home() {
  return (
    <main>
      <div className="space-y-4 p-8">
        <Reports />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <MultiLineChart />
          <PieChartComponent />
          <BarChartComponent />
        </div>
        <SongsTable />
      </div>
    </main>
  );
}
