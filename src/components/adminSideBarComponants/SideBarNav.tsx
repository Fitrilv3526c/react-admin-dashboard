import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import ListComponant from "./ListComponant";
import { useLocation } from "react-router-dom";

const SideBarNav = () => {
  const location = useLocation();
  const Data = [
    {
      id: 1,
      url: "/admin/dashboard",
      text: "Dashboard",
      location: location,
      Icon: RiDashboardFill,
    },
    {
      id: 2,
      url: "/admin/products",
      text: "Products",
      location: location,
      Icon: RiShoppingBag3Fill,
    },
    {
      id: 3,
      url: "/admin/customers",
      text: "Customers",
      location: location,
      Icon: IoIosPeople,
    },
    {
      id: 4,
      url: "/admin/transactions",
      text: "Transactions",
      location: location,
      Icon: AiFillFileText,
    },
  ];
  return (
    <div>
      <h5>DashBoard</h5>
      <ul>
        {Data.map((data) => (
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

export default SideBarNav;
