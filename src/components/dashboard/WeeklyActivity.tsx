import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import SectionTitle from "./SectionTitle";
import { useRef } from "react";
import useChartResize from "../../hooks/useChartResize";
import { ChartData } from "../../types/common";

interface Props {
  className?: string;
  weeklyActivity: ChartData;
}

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: {
      align: "end",
      labels: {
        usePointStyle: true,
        boxWidth: 10,
        boxHeight: 10,
        padding: 30,
        filter: (item) => item.datasetIndex !== 1,
        font: {
          size: 14,
        },
      },
    },
  },
  scales: {
    x: {
      stacked: false,
      grid: {
        display: false,
      },
      border: {
        color: "rgba(243, 243, 245, 1)",
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
        color: "rgba(243, 243, 245, 1)",
      },
      stacked: false,
      ticks: {
        stepSize: 100,
        color: "rgba(113, 142, 191, 1)",
        font: {
          family: "Inter",
          weight: 300,
        }
      },
      border: {width: 0},
    },
  },
  layout: {
    padding: {
      top: 0,
      left: 20,
      right: 20,
      bottom: 30,
    },
  },
};

const WeeklyActivity = ({ className  = "", weeklyActivity }: Props) => {
  const chartRef = useRef<ChartJS<"bar"> | null>(null);
  const { key } = useChartResize(chartRef);

  const data = {
    labels: weeklyActivity.label,
    datasets: [
      {
        label: "Deposit",
        data: weeklyActivity.data[0], 
        backgroundColor: "rgba(0, 0, 0, 1)",
        borderRadius: 30,
        barThickness: 15,
        borderSkipped: false,
      },
      {
        label: "Spacer", // Invisible bars for spacing
        data: new Array(7).fill(null), // Empty dataset
        backgroundColor: "rgba(0, 0, 0, 0)", // Transparent
        barThickness: 10, // Controls space size
      },
      {
        label: "Withdrawal",
        data: weeklyActivity.data[1], 
        backgroundColor: "rgba(57, 106, 255, 1)",
        borderRadius: 30,
        barThickness: 15,
        borderSkipped: false,
      },
    ],
  };

  return (
    <div className={className}>
      <SectionTitle title="Weekly Activity" />
      <div className={`bg-white rounded-[25px]`}>
        <Bar key={key} ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default WeeklyActivity;
