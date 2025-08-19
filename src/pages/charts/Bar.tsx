import AdminSideBar from "../../components/AdminSideBar";
import { BarChart } from "../../components/Charts/BarChart";

const Bar = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="adminConatiner">
      {/* Side Bar */}
      <AdminSideBar />
      {/* Main */}
      <main className="charContainer">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data1={[200, 444, 343, 556, 778, 455, 990]}
            data2={[300, 144, 433, 655, 237, 755, 190]}
            title1="Products"
            title2="Users"
            bgColor1={`hsl(260,50%,30%)`}
            bgColor2={`hsl(360,90%,90%) `}
          />
          <h2>Top Selling & Top Customers</h2>
        </section>

        <section>
          <BarChart
            horizontal={true}
            data1={[200, 444, 343, 556, 778, 455, 990, 444, 122, 334, 890, 909]}
            data2={[]}
            title1="Products"
            title2="Users"
            bgColor1={`hsl(180,40%,50%)`}
            bgColor2=""
            labels={months}
          />
          <h2>Orders Throught the Year</h2>
        </section>
      </main>
    </div>
  );
};

export default Bar;
