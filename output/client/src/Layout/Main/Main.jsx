import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/HomepageComponents/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
