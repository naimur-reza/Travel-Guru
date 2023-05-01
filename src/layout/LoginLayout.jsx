import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { Link, Outlet } from "react-router-dom";
import Button from "../components/Button";
import Hamburger from "hamburger-react";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
const LoginLayout = () => {
  const { user, logOut } = useContext(AuthContext);
  const [show, isShow] = useState(false);
  console.log(show);
  return (
    <>
      <div className="">
        <div className="my-container flex  justify-between    py-5 flex-col lg:flex-row">
          <div className="flex lg:gap-14 gap-5 justify-between px-5  items-center">
            <div className="w-[88px]">
              <img src={logo} className="mb-2" alt="" />
            </div>

            <div className="mb-3">
              <div className="lg:hidden">
                <Hamburger
                  toggled={show}
                  toggle={isShow}
                  color="#000000
"
                  size={33}
                />
              </div>
            </div>
          </div>
          <div
            className={`lg:space-x-5 space-y-4 lg:static absolute p-5 w-1/2 lg:w-auto rounded-lg bg-opacity-80 top-0 ${
              show && "left-0"
            } lg:space-y-0 bg-black lg:bg-opacity-0 ${
              !show && "-left-64"
            }  font-semibold duration-400 lg:text-black text-white  transition-all flex flex-col lg:block`}
          >
            <Link to={"/"}>Home</Link>
            <Link>Destination</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
            {user ? (
              <>
                <Link onClick={logOut}>
                  <Button>Logout</Button>
                </Link>
              </>
            ) : (
              <>
                <Link to={"/auth"}>
                  <Button>Login</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default LoginLayout;
