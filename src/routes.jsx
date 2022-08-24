import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import Container from "./components";
import Login from "./pages/Login";
import Public from "./public";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="home" replace={true} />} />
        <Route path="home" element={<Container />} />
      </Route>
      <Route path="login" element={<Public />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
}

export default Router;
