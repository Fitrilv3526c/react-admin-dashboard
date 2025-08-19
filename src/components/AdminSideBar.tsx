import Chart from "./adminSideBarComponants/Chart";
import SideBarNav from "./adminSideBarComponants/SideBarNav";
import Apps from "./adminSideBarComponants/Apps";

const AdminSideBar = () => {
  return (
    <>
      <aside>
        <h2>Logo.</h2>
        <SideBarNav />
        <Chart />
        <Apps />
      </aside>
    </>
  );
};

export default AdminSideBar;
