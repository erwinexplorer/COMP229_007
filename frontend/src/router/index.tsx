import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Protected from "./protected";
import Dashboard from "../pages/dashboard";
import Public from "./public";
import SignUp from "../pages/signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* handle redirecting when going to index route */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* private routes */}
        <Route element={<Protected />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/user" element={<User />} /> */}
        </Route>

        {/* public routes */}
        <Route element={<Public />}>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* fallback Route */}
        <Route path="*" element={<p>404 NOT FOUND</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
