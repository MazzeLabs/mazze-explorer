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

export const options = {
  responsive: true,
  plugins: {
    tooltip: {
      usePointStyle: true,
      labelPointStyle: {
        pointStyle: "circle",
        rotation: 0,
      },
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
      },
    },
    y: {
      ticks: {
        count: 4,
        color: "#737B8B",
      },
      grid: {
        display: true,
        color: "#E2E7E7",
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
};

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

const BalanceHistoryTab = () => {
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
    <div className="pt-9 md:pt-[60px] pb-3 md:pb-10">
      <Chart
        ref={chartRef}
        type="line"
        height={160}
        data={chartData}
        options={{
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
              },
            },
            y: {
              ticks: {
                count: 4,
                color: "#737B8B",
              },
              grid: {
                display: true,
                color: "#E2E7E7",
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
        }}
        // className="!h-[400px]"
      />
    </div>
  );
};

export default BalanceHistoryTab;
