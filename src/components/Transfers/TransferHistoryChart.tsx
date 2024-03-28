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

export const data = {
  labels,
  datasets: [
    {
      data: Array(30)
        .fill(0)
        .map(() => Math.random() * 50),
      backgroundColor: "#FFE5C5",
      hoverBorderColor: "#313131",
      borderColor: "#FFE5C5",
      borderWidth: 1,
      stack: "Stack 0",
      borderRadius: 8,
    },
    {
      data: Array(30)
        .fill(0)
        .map(() => Math.random() * -50),
      backgroundColor: "#EFF1F9",
      hoverBorderColor: "#313131",
      borderColor: "#EFF1F9",
      borderWidth: 1,
      stack: "Stack 0",
      borderRadius: 8,
    },
  ],
};

const TransferHistoryChart: React.FC<TransactionHistoryChartProps> = ({
  className,
}) => {
  const [period, setPeriod] = useState(0);

  return (
    <div
      className={`bg-white rounded-[10px] px-1.5 md:px-8 pt-1.5 md:pt-3 pb-[18px] md:pb-8 lg:pb-[52px] ${
        className ?? ""
      }`}
    >
      <SwitchSelector
        items={["1H", "6H", "1D"]}
        selected={period}
        setSelected={setPeriod}
      />
      <div className="mt-5">
        <Bar options={options} data={data} height={60} />
      </div>
    </div>
  );
};

export default TransferHistoryChart;
