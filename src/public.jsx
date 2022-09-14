import { useCookies } from "react-cookie";
import { Navigate, Outlet } from "react-router-dom";
function Public() {
  const [cookie] = useCookies();
  return <>{!cookie.userToken ? <Outlet /> : <Navigate to={"/home"} />}</>;
}

export default Public;
