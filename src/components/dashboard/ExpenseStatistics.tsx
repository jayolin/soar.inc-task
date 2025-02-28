import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import SectionTitle from './SectionTitle';
import { useRef } from 'react';
import useChartResize from '../../hooks/useChartResize';
import { ChartData } from '../../types/common';

interface Props {
  className?: string;
  stats: ChartData;
}

ChartJS.register(ArcElement, Tooltip, Legend);

const options: ChartOptions<"pie"> = {
  responsive: true,
  // rotation: -Math.PI * 60,
  plugins: {
    legend: {
      display: false,
    },
  },
  layout: {
    padding: 20,
  },
};

const ExpenseStatistics = ({ className = "", stats }: Props) => {
  const chartRef = useRef<ChartJS<"pie"> | null>(null);
  const { key } = useChartResize(chartRef);

  const data = {
    labels: stats.label,
    datasets: [
      {
        data: stats.data,
        backgroundColor: ['#396AFF', '#343C6A', '#FC7900', '#232323'],
        offset: [0, 50, 50, 35],
      },
    ],
  };

  return (
    <div className={`${className} flex flex-col`}>
      <SectionTitle title="Expense Statistics" />
      <div className="bg-white rounded-[25px] flex-1 flex items-center justify-center">
        <Pie key={key} ref={chartRef} width={"100%"} data={data} options={options} />
      </div>
    </div>
  );
};

export default ExpenseStatistics;
