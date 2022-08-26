import React from "react";
import makePdfData from "../components/CreatePdf/data";
import Header from "../components/header";
import Menu from "../components/menu/Menu";
function Dashboard() {
  return (
    <div className="d-flex">
      <Menu />
      <div className="w-100 ">
        <Header />
        <button onClick={makePdfData}>pdf</button>
      </div>
    </div>
  );
}

export default Dashboard;
