import { useLocation } from "react-router-dom";
import ListComponant from "./ListComponant";
import { FaChartBar, FaChartLine, FaChartPie } from "react-icons/fa";

const Chart = () => {
  const location = useLocation();
  const chartArr = [
    {
      id: 1,
      url: "/admin/charts/bar",
      text: "Bar",
      location: location,
      Icon: FaChartBar,
    },
    {
      id: 2,
      url: "/admin/charts/pie",
      text: "Pie",
      location: location,
      Icon: FaChartPie,
    },
    {
      id: 3,
      url: "/admin/charts/line",
      text: "Line",
      location: location,
      Icon: FaChartLine,
    },
  ];
  return (
    <div>
      <h5>Charts</h5>
      <ul>
        {chartArr.map((data) => (
          <ListComponant
            key={data.id}
            url={data.url}
            text={data.text}
            location={data.location}
            Icon={data.Icon}
          />
        ))}
      </ul>
    </div>
  );
};

export default Chart;
