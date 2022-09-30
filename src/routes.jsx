import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Protected from "./Protected";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Public from "./public";
import Home from "./components/Home/Home";
import Students from "./pages/Students";
import DirectionTypes from "./pages/DirectionTypes";
import ContractTypes from "./pages/ContractType";
import CreateQRCode from "./components/qrCode/createQRCode";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Protected />}>
        <Route index element={<Navigate to="home" replace={true} />} />
        <Route path="shartnomalar" element={<Outlet />}>
          <Route path=":id" element={<CreateQRCode />} />
        </Route>
        <Route path="home" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="students" element={<Students />} />
          <Route path="directions" element={<DirectionTypes />} />
          <Route path="contracts" element={<ContractTypes />} />
        </Route>
      </Route>
      <Route path="login" element={<Public />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
}

export default Router;
