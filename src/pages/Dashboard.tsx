import { BsSearch } from "react-icons/bs";
import AdminSideBar from "../components/AdminSideBar";
import { FaRegBell } from "react-icons/fa";
import userpic from "../assets/userpic.png";
import Widget from "./dashboardComponants/Widget";
import { WingetData } from "../data/WingetData";
import DashboardCategories from "./dashboardComponants/DashboardCategories";
import Data from "../data/data.json";
import { BarChart } from "../components/Charts/BarChart";
import { BiMaleFemale } from "react-icons/bi";
import { DoughnetChart } from "../components/Charts/DoughnetChart";
import DashBoardTable from "../components/DashBoardTable";

const Dashboard = () => {
  return (
    <div className="adminConatiner">
      {/* Side Bar */}
      <AdminSideBar />
      {/* Main */}
      <main className="dashBoard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search For data, user, docs ..." />
          <FaRegBell />
          <img src={userpic} alt="user" />
        </div>

        <section className="widgetContainer">
          {WingetData.map((wid) => (
            <Widget
              key={wid.id}
              percent={wid.percent}
              value={wid.value}
              amount={wid.amount}
              color={wid.color}
              heading={wid.heading}
            />
          ))}
        </section>

        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transactions</h2>
            <BarChart
              data1={[200, 444, 343, 556, 778, 455, 990]}
              data2={[300, 144, 433, 655, 237, 755, 190]}
              title1="Revenue"
              title2="Transactions"
              bgColor1="rgb(0,155,255)"
              bgColor2="rgba(53,162,235,0.8)"
            />
          </div>
          <div className="dashboardCategories">
            <h2>Inventry</h2>
            {Data.categories.map(({ value, heading }) => (
              <DashboardCategories
                key={heading}
                value={value}
                heading={heading}
                color={`hsl(${value * 7},${value}%,50%)`}
              />
            ))}
          </div>
        </section>

        <section className="transactionContainer">
          <div className="genderChart">
            <h2>Gender Chart</h2>
            <DoughnetChart
              labels={["Male", "Female"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          <DashBoardTable data={Data.transaction} />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
