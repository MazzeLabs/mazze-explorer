"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  ChartArea,
  ChartData,
} from "chart.js";
import { useEffect, useRef, useState } from "react";
import { Chart, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

export const options = () => ({
  responsive: true,
  interaction: {
    intersect: false,
  },
  plugins: {
    tooltip: {
      usePointStyle: true,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: true,
        maxTicksLimit: 6,
        color: "#FFFFFF",
      },
    },
    y: {
      ticks: {
        count: 4,
        color: "#8A8A8A",
      },
      grid: {
        display: true,
        color: "#353A55",
      },
      border: { display: false },
    },
  },
  elements: {
    point: {
      pointStyle: "circle",
      radius: 0,
      hitRadius: 12,
      hoverRadius: 8,
      hoverBackgroundColor: "#FD9109",
      hoverBorderColor: "white",
      hoverBorderWidth: 4,
    },
  },
});

const labels = Array(30)
  .fill(0)
  .map((_, i) => i);

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      data: labels.map(() => Math.random() * 60),
      borderColor: "#FD9109",
      tension: 0.4,
      borderWidth: 4,
    },
  ],
};

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = "#FFFFFF00";
  const colorEnd = "#FD910940";

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(1, colorEnd);

  return gradient;
}

const TransferHistoryChart = () => {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <div className="mazze-card p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-mazze-orange-gradient rounded-xl flex items-center justify-center">
          <svg className="w-5 h-5 text-mazze-dark" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Transfer History</h2>
          <p className="text-white/60 text-sm">Transfer activity over time</p>
        </div>
      </div>
      
      <Chart
        ref={chartRef}
        type="line"
        height={160}
        data={chartData}
        options={options()}
      />
    </div>
  );
};

export default TransferHistoryChart;
