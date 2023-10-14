import React from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="Layout">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
