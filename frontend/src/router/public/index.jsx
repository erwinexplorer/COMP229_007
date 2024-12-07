import isAuthenticated from "../helper";
import { Navigate, Outlet } from "react-router-dom";

const Public = () => {
  return isAuthenticated() ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default Public;
