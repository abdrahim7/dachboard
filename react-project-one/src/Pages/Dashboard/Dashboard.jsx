import TopBar from "../../components/TopBar";
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router";
const Dashboard = () => {
  return (
    <div>
      <TopBar />
      <div style={{ display: "flex" }}>
        <SideBar />
        <Outlet />{/* we use ''outlet'' to showing child content witout relauding the page in spisific part on the element */}
      </div>
    </div>
  );
};

export default Dashboard;
