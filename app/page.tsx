import BarChartComponent from "@/components/ui/BarChartComponent";
import { MultiLineChart } from "@/components/ui/MultiLineChart";
import MyTable from "@/components/ui/MyTable";
import PieChartComponent from "@/components/ui/PieChart";
import Reports from "@/components/ui/Reports";

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
        <MyTable />
      </div>
    </main>
  );
}
