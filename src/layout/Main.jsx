import React from "react";
import "./Main.css";
import background from "../assets/images/Rectangle 1.png";
import Header from "../components/shared/Header";
import { Outlet } from "react-router-dom";
("../assets/images/Rectangle 1.png");
const Main = () => {
  return (
    <div className="home">
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
