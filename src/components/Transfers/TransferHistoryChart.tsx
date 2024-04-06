"use client";

import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import SwitchSelector from "../SwitchSelector";
import useDark from "@/hooks/useDark";

interface TransactionHistoryChartProps {
  className?: string;
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
      border: { display: false },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
      border: { display: false },
    },
  },
};

const labels = Array(30)
  .fill(0)
  .map((_, i) => i);

export const data = (dark: boolean) => ({
  labels,
  datasets: [
    {
      data: Array(30)
        .fill(0)
        .map(() => Math.random() * 50),
      backgroundColor: "#FFE5C5",
      hoverBorderColor: dark ? "#FFFFFF" : "#313131",
      borderColor: "#FFE5C5",
      borderWidth: 1,
      stack: "Stack 0",
      borderRadius: 8,
    },
    {
      data: Array(30)
        .fill(0)
        .map(() => Math.random() * -50),
      backgroundColor: dark ? "#2E386D" : "#EFF1F9",
      hoverBorderColor: dark ? "#FFFFFF" : "#313131",
      borderColor: dark ? "#2E386D" : "#EFF1F9",
      borderWidth: 1,
      stack: "Stack 0",
      borderRadius: 8,
    },
  ],
});

const TransferHistoryChart: React.FC<TransactionHistoryChartProps> = ({
  className,
}) => {
  const [period, setPeriod] = useState(0);
  const { dark } = useDark();

  return (
    <div
      className={`bg-white dark:bg-dark-blue-200 dark:border dark:border-gray-750 rounded-[10px] px-1.5 md:px-8 pt-1.5 md:pt-3 pb-[18px] md:pb-8 lg:pb-[52px] ${
        className ?? ""
      }`}
    >
      <SwitchSelector
        items={["1H", "6H", "1D"]}
        selected={period}
        setSelected={setPeriod}
      />
      <div className="mt-5">
        <Bar options={options} data={data(dark)} height={60} />
      </div>
    </div>
  );
};

export default TransferHistoryChart;
