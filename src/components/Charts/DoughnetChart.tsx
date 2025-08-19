import { ChartData, ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";

interface donutChartProps {
  labels: string[];
  data: number[];
  backgroundColor: string[];
  cutout?: number | string;
  legends?: boolean;
  offset?: number[];
}

export const DoughnetChart = ({
  labels,
  data,
  backgroundColor,
  cutout,
  legends = true,
  offset,
}: donutChartProps) => {
  const DoughnetData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        offset,
      },
    ],
  };

  const DoughnetOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: "bottom",
        labels: {
          padding: 40,
        },
      },
    },
    cutout,
  };

  return <Doughnut data={DoughnetData} options={DoughnetOptions} />;
};
