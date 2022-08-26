import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Protected from "./Protected";
import Container from "./components";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Public from "./public";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Protected />}>
        <Route index element={<Navigate to="home" replace={true} />} />
        <Route path="home" element={<Dashboard />} />
      </Route>
      <Route path="login" element={<Public />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
}

export default Router;
