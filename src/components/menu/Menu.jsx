import React from "react";
import "./main.css";
import { useSelector } from "react-redux";
function Menu() {
  const menuToggle = useSelector((store) => store.menu.menuToggler);
  return (
    <nav className={`nav ${menuToggle ? "" : "size"}`}>
      <h2 className="py-2 text-center mb-0">Shartnomalar</h2>
      <ul className="p-0 m-3">
        <li>
          <div>
            <i className="bi me-2 bi-people-fill" />
            Talabalar
          </div>
        </li>
        <li>
          <i className="bi me-2 bi-file-earmark-medical-fill"></i>Shartnoma
          berish
        </li>
        <li>
          <i className="bi me-2 bi-pie-chart-fill"></i>To'lov monitoring
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
