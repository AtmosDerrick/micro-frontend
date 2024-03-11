import { useState } from "react";
import {  Navigate, Outlet } from "react-router-dom";

const Layout = ({ component: RouteComponent, ...rest }) => {
  const [user, setUser] = useState(true);
  return <div>{!!user ? <Outlet /> : <Navigate to={"/"} />}</div>;
};

export default Layout;
