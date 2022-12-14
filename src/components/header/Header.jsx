import React from "react";
import "./main.css";
import { useDispatch, useSelector } from "react-redux";
import { exitToggle, menuToggle } from "../../store/reduser/menu/menuSlice";
import { useCookies } from "react-cookie";

export default function Header({ username = "Not User Name" }) {
  const [, , removeCookie] = useCookies();
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);
  let name = "";
  let notUserImg = "";
  if (username !== undefined) {
    name = username?.split(" ");
    notUserImg = name[1][0] + name[0][0];
  }
  function handleExit() {
    dispatch(exitToggle());
  }

  function handleOpen() {
    dispatch(menuToggle());
  }

  function userLogOut() {
    console.log(1);
    removeCookie("userToken", { path: "/" });
  }

  return (
    <div className="header  py-2">
      <div className=" px-3 d-flex justify-content-between align-items-center">
        <div className="d-flex  align-items-center">
          <div className="me-4">
            <div
              onClick={handleOpen}
              className="menu-btn d-flex align-items-center justify-content-center"
            >
              <i className="bi bi-list text-black"></i>
            </div>
          </div>
          <div className="logo d-flex align-items-center ">
            {/* <img src={logo} width="53" height="53" alt="logo" /> */}
          </div>
        </div>
        <div
          onClick={handleExit}
          className="user-info d-flex align-items-center"
        >
          <div className="user-img d-flex justify-content-center align-items-center">
            {notUserImg}
          </div>
          <p className="m-0 ms-2">
            {name[0] + " " + name[1][0] + (name[2]?.charAt(0) ? "." + name[2]?.charAt(0) : "")}
            <i className="bi d-inline-block ms-3 bi-chevron-down"></i>
          </p>
          <button
            onClick={userLogOut}
            className={`submenu ${!menu.logoutToggler && "close-exit"} shadow`}
          >
            <i className="bi d-inline-block me-3 bi-box-arrow-right"></i>{" "}
            Profildan chiqish
          </button>
        </div>
      </div>
    </div>
  );
}
