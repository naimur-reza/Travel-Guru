import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
const Login = () => {
  return (
    <div className="px-5">
      <div className="border max-w-xl mx-auto  p-10 ">
        <form className="flex flex-col  gap-6">
          <p className="text-lg font-bold">Login</p>
          <input
            required
            className="border-b-2 p-2 outline-none text-gray-500 font-semibold tracking-wide"
            type="email"
            name="email"
            placeholder="Username or email"
          />
          <input
            required
            className="border-b-2 p-2 outline-none text-gray-500 font-semibold tracking-wide"
            type="password"
            name="password"
            placeholder="Password"
          />
          <div className="flex items-center justify-between gap-2 text-gray-400 ">
            <div className="flex items-center gap-1">
              <input type="checkbox" name="" id="" /> <span>Remember Me</span>
            </div>
            <div className="flex items-center gap-1 text-orange-400 font-semibold underline">
              <span>Forget Password?</span>
            </div>
          </div>
          <input
            className="bg-orange-400 py-2 rounded font-semibold cursor-pointer hover:bg-orange-500 transition-all"
            type="submit"
            value="Login"
          />
        </form>
        <p className="text-center py-5 font-semibold text-sm ">
          Don't have and account?{" "}
          <Link
            to={"./register"}
            className="  text-orange-500 text-sm  font-semibold underline"
          >
            Create an account
          </Link>
        </p>
      </div>
      <div className="flex items-center justify-center my-6">
        <hr className="min-w-[150px] block mx- border mr-2" />
        <span className="font-semibold">Or</span>
        <hr className="min-w-[150px] ms-2 block  border" />
      </div>
      <div className="space-y-3 text-center">
        <button className="lg:w-96 inline-flex items-center gap-3 border px-9 py-2 rounded-full font-semibold text-sm">
          <FaFacebook
            className="text-sky-500"
            style={{ width: "30px", height: "30px" }}
          />
          Continue With Facebook
        </button>
        <br />
        <button className="lg:w-96  inline-flex items-center gap-3 border px-9 py-2 rounded-full font-semibold text-sm">
          <FaGoogle
            className="text-red-400"
            style={{ width: "30px", height: "30px" }}
          />
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Login;
