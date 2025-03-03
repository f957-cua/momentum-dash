"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/shared/ui/chart";

const chartData = [
  { month: "March", clients: 237, customers: 120, employees: 10, modules: 5 },
  { month: "April", clients: 73, customers: 190, employees: 20, modules: 10 },
  { month: "May", clients: 209, customers: 130, employees: 30, modules: 15 },
  { month: "June", clients: 214, customers: 140, employees: 40, modules: 20 },
  { month: "July", clients: 186, customers: 80, employees: 50, modules: 25 },
  { month: "August", clients: 305, customers: 200, employees: 60, modules: 30 },
  {
    month: "September",
    clients: 237,
    customers: 120,
    employees: 70,
    modules: 35,
  },
  { month: "October", clients: 73, customers: 190, employees: 80, modules: 40 },
  {
    month: "November",
    clients: 209,
    customers: 130,
    employees: 90,
    modules: 45,
  },
  {
    month: "December",
    clients: 214,
    customers: 140,
    employees: 100,
    modules: 50,
  },
  {
    month: "January",
    clients: 186,
    customers: 80,
    employees: 110,
    modules: 55,
  },
  {
    month: "February",
    clients: 305,
    customers: 200,
    employees: 120,
    modules: 60,
  },
];

const chartConfig = {
  clients: {
    label: "Clients",
    color: "#2563eb",
  },
  customers: {
    label: "Customers",
    color: "#60a5fa",
  },
  employees: {
    label: "Employees",
    color: "#60a5fa",
  },
  modules: {
    label: "Modules",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function HeroChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="clients" fill="var(--color-clients)" radius={4} />
        <Bar dataKey="customers" fill="var(--color-customers)" radius={4} />
        <Bar dataKey="employees" fill="var(--color-employees)" radius={4} />
        <Bar dataKey="modules" fill="var(--color-modules)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
