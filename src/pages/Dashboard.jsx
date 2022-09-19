import React from "react";
import { Outlet } from "react-router-dom";
// import makePdfData from "../components/CreatePdf/data";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
function Dashboard() {
  return (
    <div className="d-flex">
      <Menu />
      <div className="w-100 ">
        <Header />
        <div className="px-3 py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
