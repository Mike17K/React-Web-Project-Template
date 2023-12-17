// Layout.js
import { Outlet } from "react-router-dom";
import "./Layout.css";
import NavBar from "./components/NavBar/NavBar";

function Layout() {
  return (
    <div>
      <NavBar />

      <div className="flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
