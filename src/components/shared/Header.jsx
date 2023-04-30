import React from "react";
import logo from "../../assets/whitelogo.png";
import { Link } from "react-router-dom";
import Button from "../Button";
const Header = () => {
  return (
    <div className="">
      <div className="my-container flex  justify-between    py-5">
        <div className="flex gap-14  items-center">
          <div className="w-[88px]">
            <img src={logo} className="" alt="" />
          </div>

          <div>
            <div className="mb-3">
              <div className="relative  flex w-full flex-wrap items-stretch ">
                <input
                  type="search"
                  className="relative block w-[200px]  flex-auto rounded border border-solid border-neutral-200 bg-white bg-opacity-10 bg-clip-padding px-3 py-[0.25rem] text-sm font-normal leading-[1.6] text-neutral-200 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-300  focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-400 dark:text-white dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search your destination..."
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />

                {/* <!--Search icon--> */}
                <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-x-5 text-white font-semibold">
          <Link>News</Link>
          <Link>Destination</Link>
          <Link>Blog</Link>
          <Link>Contact</Link>
          <Link>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
