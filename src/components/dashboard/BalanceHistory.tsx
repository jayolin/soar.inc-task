import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale, ChartOptions, Filler } from "chart.js";
import { TypedChartComponent } from "react-chartjs-2/dist/types";
import SectionTitle from "./SectionTitle";
import useChartResize from "../../hooks/useChartResize";
import { ChartData } from "../../types/common";

interface Props {
  className?: string;
  history: ChartData;
}

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale, Filler);

const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Hide legend if not needed
    },
  },
  scales: {
    x: {
      grid: {
        color: "rgba(243, 243, 245, 1)", // Hide vertical grid lines
      },
      border: {
        dash: [10, 10]
      },
      ticks: {
        color: "rgba(113, 142, 191, 1)",
        font: {
          family: "Inter",
          weight: 300,
        }
      }
    },
    y: {
      grid: {
        color: "rgba(243, 243, 245, 1)", // Light gray grid lines
      },
      beginAtZero: true,
      ticks: {
        stepSize: 200,
        color: "rgba(113, 142, 191, 1)",
        font: {
          family: "Inter",
          weight: 300,
        }
      },
      border: {
        display: false,
        dash: [10, 10]
      }
    },
  },
  layout: {
    padding: {
      left: 20,
      right: 30,
      top: 30,
      bottom: 30
    },
  }
};

const BalanceHistory = ({ className, history }: Props) => {
  const chartRef = useRef<ChartJS<"line"> | null>(null);
  const { key } = useChartResize(chartRef);

  const data = {
    labels: history.label,
    datasets: [
      {
        data: history.data,
        borderColor: "#1814F3",
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 250);
          gradient.addColorStop(0, 'rgba(45, 96, 255, 0.25)');
          gradient.addColorStop(1, 'rgba(45, 96, 255, 0)');
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        
      },
    ],
  };

  return (
    <div className={className}>
      <SectionTitle title="Balance History" />
      <div className="bg-white rounded-[25px] w-full">
        <Line key={key} width={"100%"} height={300} ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default BalanceHistory;
