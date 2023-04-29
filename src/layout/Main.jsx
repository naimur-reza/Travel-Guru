import React from "react";
import Home from "../pages/home/Home";
import Header from "../components/shared/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
