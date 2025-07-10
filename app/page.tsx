import {  DailyActivityChart } from "@/components/AppAreaChart";
import { MonthlyRevenueChart } from "@/components/AppBarChart";
import { SalesBySourceChart } from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 p-4 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className=" bg-primary-foreground p-4 rounded-md lg:col-span-2 xl:col-span-1 2xl:col-span-2 ">
        <MonthlyRevenueChart />
      </div>
      <div className=" bg-primary-foreground p-4 rounded-md"><CardList title="Latest Transactions"/></div>
      <div className=" bg-primary-foreground p-4 rounded-md"><SalesBySourceChart/></div>
      <div className=" bg-primary-foreground p-4 rounded-md"><TodoList/></div>
      <div className=" bg-primary-foreground p-4 rounded-md lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <DailyActivityChart />
      </div>
      <div className=" bg-primary-foreground p-4 rounded-md"><CardList title="Popular Content"/></div>
    </div>
  );
}
