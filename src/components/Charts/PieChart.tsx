import { ChartData, ChartOptions } from "chart.js";
import { Pie } from "react-chartjs-2";

interface pieChartProps {
  labels: string[];
  data: number[];
  backgroundColor: string[];
  offset?: number[];
}

export const PieChart = ({
  labels,
  data,
  backgroundColor,
  offset,
}: pieChartProps) => {
  const pieData: ChartData<"pie", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 1,
        offset,
      },
    ],
  };

  const pieOptions: ChartOptions<"pie"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Pie data={pieData} options={pieOptions} />;
};
