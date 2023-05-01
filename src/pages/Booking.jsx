import React from "react";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import Loading from "./Loading";

const booking = () => {
  const { id } = useParams();
  const destination = useLoaderData();
  const navigate = useNavigation();
  const { name, description } = destination;
  if (navigate.state === "loading") {
    return <Loading />;
  }
  return (
    <form className="max-w-5xl mx-auto py-10 flex justify-between ">
      <div className="max-w-lg ">
        <p className="text-6xl text-white font-bold py-3">{name}</p>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="bg-white w-96 p-5 rounded-md">
        <p className="text-sm text-gray-400 my-1">Origin</p>
        <input
          type="text"
          required
          placeholder="enter origin"
          className="text-sm bg-gray-100  outline-gray-400  block font-semibold  text-gray-700  my-1 p-2 rounded w-full border"
        />
        <p className="text-sm block my-1 text-gray-400">Destination</p>
        <h1 className=" font-semibold bg-gray-100 p-2 rounded text-gray-700">
          {name}
        </h1>
        {/* date field */}
        <input
          className="w-full py-2 my-4 text-gray-800 rounded cursor-pointer  font-semibold hover:bg-orange-500 transition-all bg-orange-400 "
          type="submit"
          value="Start Booking"
        />
      </div>
    </form>
  );
};

export default booking;
