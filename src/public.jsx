import React from "react";
import { Outlet } from "react-router-dom";
function Public() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default Public;
