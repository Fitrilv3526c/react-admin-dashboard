import { useLocation } from "react-router-dom";
import ListComponant from "./ListComponant";
import { FaGamepad, FaStopwatch } from "react-icons/fa";
import { RiCoupon3Fill } from "react-icons/ri";

const Chart = () => {
  const location = useLocation();
  const chartArr = [
    {
      id: 1,
      url: "/admin/apps/stopwatch",
      text: "Stopwatch",
      location: location,
      Icon: FaStopwatch,
    },
    {
      id: 2,
      url: "/admin/apps/coupon",
      text: "Coupon",
      location: location,
      Icon: RiCoupon3Fill,
    },
    {
      id: 3,
      url: "/admin/apps/toss",
      text: "Toss",
      location: location,
      Icon: FaGamepad,
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
