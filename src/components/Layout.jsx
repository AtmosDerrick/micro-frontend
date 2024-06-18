import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../contextApi/UserContext";

const Layout = ({ component: RouteComponent, ...rest }) => {
  const { token } = UserAuth();

  return <div>{!!token ? <Outlet /> : <Navigate to={"/"} />}</div>;
};

export default Layout;
