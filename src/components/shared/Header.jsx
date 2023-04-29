import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="my-container flex  justify-between">
      <div className="flex  items-center gap-14">
        <div className="w-[88px]">
          <img src={logo} className="w-full" alt="" />
        </div>
        <div>
          <input type="text" className="" />
        </div>
      </div>
      <div className="space-x-5">
        <Link>News</Link>
        <Link>Destination</Link>
        <Link>Blog</Link>
        <Link>Contact</Link>
        <Link>Login</Link>
      </div>
    </div>
  );
};

export default Header;
