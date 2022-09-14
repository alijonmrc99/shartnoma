import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";
function Protected() {
  const [cookie] = useCookies();
  return <>{cookie.userToken ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default Protected;
