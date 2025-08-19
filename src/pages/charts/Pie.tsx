import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
import AdminSideBar from "../../components/AdminSideBar";
import { PieChart } from "../../components/Charts/PieChart";
import { DoughnetChart } from "../../components/Charts/DoughnetChart";
import { categories } from "../../data/data.json";

ChartJS.register(ArcElement, Tooltip, Legend);

const Pie = () => {
  return (
    <div className="adminConatiner">
      {/* Side Bar */}
      <AdminSideBar />
      {/* Main */}
      <main className="charContainer">
        <h1>Pie & Doughnut Charts</h1>
        <section>
          <div>
            <PieChart
              labels={["Processing", "Shipped", "Delievred"]}
              backgroundColor={[
                `hsl(110,80%,80%)`,
                `hsl(110,80%,50%)`,
                `hsl(110,40%,50%)`,
              ]}
              data={[12, 9, 13]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Order Fulfilment Ratio</h2>
        </section>

        <section>
          <div>
            <DoughnetChart
              labels={categories.map((i) => i.heading)}
              backgroundColor={categories.map(
                (i) => `hsl(${i.value * 4},${i.value}%,50%)`
              )}
              data={categories.map((i) => i.value)}
              offset={[0, 0, 0, 80]}
              legends={false}
            />
          </div>
          <h2>Product Categories Ratio</h2>
        </section>

        <section>
          <div>
            <DoughnetChart
              labels={["In Stock", "Out of Stock"]}
              backgroundColor={[`hsl(269,80%,40%)`, `rgb(53,162,255)`]}
              data={[40, 20]}
              offset={[0, 60]}
              legends={false}
              cutout="70%"
            />
          </div>
          <h2>Stock Avaliablity</h2>
        </section>

        <section>
          <div>
            <DoughnetChart
              labels={[
                "Marketing Cost",
                "Discount",
                "Burnt",
                "Production Cost",
                "Net Margin",
              ]}
              backgroundColor={[
                "hsl(110,80%,40%)",
                "hsl(19,80%,40%)",
                "hsl(69,80%,40%)",
                "hsl(300,80%,40%)",
                "rgb(53, 162, 255)",
              ]}
              data={[32, 18, 5, 20, 25]}
              offset={[20, 30, 20, 30, 80]}
              legends={false}
            />
          </div>
          <h2>Reveneu Distribution</h2>
        </section>

        <section>
          <div>
            <PieChart
              labels={[
                "Teenager(Below 20)",
                "Adult (20-40)",
                "Older (above 40)",
              ]}
              backgroundColor={[
                `hsl(10, ${80}%, 80%)`,
                `hsl(10, ${80}%, 50%)`,
                `hsl(10, ${40}%, 50%)`,
              ]}
              data={[30, 250, 70]}
              offset={[0, 0, 50]}
            />
          </div>
          <h2>Users Age Group</h2>
        </section>

        <section>
          <div>
            <DoughnetChart
              labels={["Admin", "Customers"]}
              backgroundColor={[`hsl(335, 100%, 38%)`, "hsl(44, 98%, 50%)"]}
              data={[40, 250]}
              offset={[0, 50]}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Pie;
