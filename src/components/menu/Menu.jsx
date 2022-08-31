import React from "react";
import "./main.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Menu() {
  const menuToggle = useSelector((store) => store.menu.menuToggler);
  return (
    <nav className={`nav ${menuToggle ? "" : "size"}`}>
      <h2 className="py-2 text-center mb-0">Shartnomalar</h2>
      <ul className="p-0 m-3">
        <li>
          <Link to="/home">
            <i className="bi me-2 bi-house-fill"></i>
            Bosh sahifa
          </Link>
        </li>
        <li>
          <Link to="students">
            <i className="bi me-2 bi-people-fill" />
            Talabalar
          </Link>
        </li>
        <li>
          <Link to="conracts">
            <i className="bi me-2 bi-file-earmark-medical-fill"></i>Shartnoma
            berish
          </Link>
        </li>
        <li>
          <Link to="conracts">
            <i className="bi me-2 bi-pie-chart-fill"></i>To'lov monitoring
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
