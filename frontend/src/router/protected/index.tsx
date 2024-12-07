import { Navigate, Outlet } from "react-router-dom";
import isAuthenticated from "../helper";

const Protected = () => {

  return isAuthenticated() ? <Outlet /> : <Navigate to="/signin" />;
};

export default Protected;
