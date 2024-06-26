"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import SwitchSelector from "../SwitchSelector";
import { useState } from "react";
import useDark from "@/hooks/useDark";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

interface TransactionHistoryChartProps {
  className?: string;
}

export const options = (dark: boolean) => ({
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: true,
      },
    },
    y: {
      ticks: {
        count: 4,
        color: "#737B8B",
      },
      grid: {
        display: true,
        color: dark ? "#2C3049" : "#E2E7E7",
      },
      border: { display: false },
    },
  },
  elements: {
    point: {
      pointStyle: "circle",
      radius: 0,
      hitRadius: 6,
    },
  },
});

const labels = ["01", "02", "03", "04", "05", "06", "07"];

export const data = {
  labels,
  datasets: [
    {
      data: [5, 10, 30, 14, 50, 20, 40],
      borderColor: "#FD9109",
    },
  ],
};

const TransactionHistoryChart: React.FC<TransactionHistoryChartProps> = ({
  className,
}) => {
  const [period, setPeriod] = useState(0);
  const { dark } = useDark();

  return (
    <div
      className={`bg-white dark:bg-dark-blue-200 dark:border dark:border-gray-750 rounded-[10px] pt-[18px] pl-3 pr-[25px] max-md:pb-8 ${
        className ?? ""
      }`}
    >
      <div className="flex items-center max-lg:justify-between pl-4 md:pl-8 mb-3">
        <span className="text-sm md:text-lg leading-[107%] md:mr-[25px] md:whitespace-nowrap">
          Mazze Transaction History
        </span>
        <SwitchSelector
          items={["1D", "7D", "1M"]}
          selected={period}
          setSelected={setPeriod}
        />
      </div>
      <Line height={"100px"} options={options(dark)} data={data} />
    </div>
  );
};

export default TransactionHistoryChart;
