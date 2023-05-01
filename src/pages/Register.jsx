import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
const Register = () => {
  const { createUser, user, signInGoogle } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();
    createUser(email, password)
      .then((res) => {
        toast.success("Registration successful");
        Navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="px-5">
      <div className="border max-w-xl mx-auto  p-6 ">
        <form onSubmit={handleRegister} className="flex flex-col  gap-5">
          <p className="text-lg font-bold">Register</p>
          <input
            required
            className="border-b-2 p-2 outline-none text-gray-500  tracking-wide"
            type="text"
            name="firstName"
            placeholder="first name"
          />
          <input
            required
            className="border-b-2 p-2 outline-none text-gray-500  tracking-wide"
            type="text"
            name="lastName"
            placeholder="last name"
          />
          <input
            required
            className="border-b-2 p-2 outline-none text-gray-500  tracking-wide"
            type="email"
            name="email"
            placeholder="username or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            className="border-b-2 p-2 outline-none text-gray-500  tracking-wide"
            type={show ? "text" : "password"}
            name="password"
            placeholder="password"
          />
          <input
            required
            className="border-b-2 p-2 outline-none text-gray-500  tracking-wide"
            type={show ? "text" : "password"}
            name="password"
            placeholder="confirm password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center">
            <input
              onClick={() => setShow(!show)}
              type="checkbox"
              name="showpass"
              id=""
            />
            <label htmlFor="showpass" className="ml-2 text-gray-400">
              Show password
            </label>
          </div>
          <div className="flex items-center justify-between gap-2 text-gray-400 ">
            <div className="flex items-center gap-2">
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
          Already have and account?{" "}
          <Link
            to={"/auth"}
            className="  text-orange-500 text-sm  font-semibold underline"
          >
            Login
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
        <button
          onClick={signInGoogle}
          className="lg:w-96  inline-flex items-center gap-3 border px-9 py-2 rounded-full font-semibold text-sm"
        >
          <FcGoogle
            className="text-red-400"
            style={{ width: "30px", height: "30px" }}
          />
          Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Register;
