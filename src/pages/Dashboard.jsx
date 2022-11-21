import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
function Dashboard() {
  const [cookie, setCookies] = useCookies();
  const [username, setUsername] = useState();
  // user login qilganda uning ro'lini olish
  useEffect(() => {
    const d = new Date();
    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
    axios.get("users/me?populate=role", {
      headers: {
        Authorization: "Bearer " + cookie.userToken,
      },
    }).then(res => {
      setCookies("role", res.data.role.name, {
        path: "/",
        expires: d,
      })
      setCookies("id", res.data.id, {
        path: "/",
        expires: d,
      })
      setUsername(res.data.fullName)
    });
  }, [cookie.userToken, setCookies])

  return (
    <div className="d-flex">
      <Menu />
      <div className="w-100 ">
        <Header username={username && username} />
        <div className="px-3 py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
