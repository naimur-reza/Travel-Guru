import React, { useContext } from "react";
import {
  Link,
  useLoaderData,
  useNavigation,
  useParams,
} from "react-router-dom";
import Loading from "./Loading";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";

import { AuthContext } from "../context/AuthProvider/AuthProvider";

const booking = () => {
  const { loading } = useContext(AuthContext);
  const { id } = useParams();
  const destination = useLoaderData();
  const navigate = useNavigation();
  const { name, description } = destination;
  if (navigate.state === "loading") {
    return <Loading />;
  }

  return (
    <form className="max-w-5xl p-5 flex-col lg:flex-row-reverse mx-auto py-10 flex justify-between ">
      <div className="max-w-lg pb-5 lg:pb-0">
        <p className="lg:text-6xl text-4xl text-white font-bold py-3">{name}</p>
        <p className="text-gray-300 lg:text-base text-sm">{description}</p>
      </div>
      <div className="bg-white lg:w-96 p-5 rounded-md">
        <p className="text-sm text-gray-400 my-1">Origin</p>
        <input
          type="text"
          required
          value={"Dhaka"}
          placeholder="enter origin"
          className="text-sm bg-gray-100  outline-gray-400  block font-semibold  text-gray-700  my-1 p-2 rounded w-full border"
        />
        <p className="text-sm block my-1 text-gray-400">Destination</p>
        <h1 className=" font-semibold bg-gray-100 p-2 rounded text-gray-700">
          {name}
        </h1>
        {/* date field */}

        <div className="w-auto py-5">
          <p className="text-sm max-w-md text-gray-400 pb-2">Pick Date</p>
          <RangeDatePicker
            className={"w-full"}
            startDate={new Date(2020, 0, 15)}
            endDate={new Date(2020, 1, 1)}
          />
        </div>
        <Link to={`/hotels/${id}`}>
          <input
            className="w-full py-2 my-4 text-gray-800 rounded cursor-pointer  font-semibold hover:bg-orange-500 transition-all bg-orange-400 "
            type="submit"
            value="Start Booking"
          />
        </Link>
      </div>
    </form>
  );
};

export default booking;
