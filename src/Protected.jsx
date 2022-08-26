import { Outlet } from "react-router-dom";
function Protected() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Protected;
