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
    <div className="max-w-5xl mx-auto py-10 flex justify-between ">
      <div className="max-w-lg ">
        <p className="text-6xl text-white font-bold py-3">{name}</p>
        <p className="text-gray-300">{description}</p>
      </div>
      <div className="bg-white w-96 p-5 rounded-md">
        <p className="text-sm text-gray-400 my-1">Origin</p>
        <h1 className=" font-bold bg-gray-100 p-2 rounded">Dhaka</h1>
        <p className="text-sm block my-1 text-gray-400">Destination</p>
        <h1 className=" font-bold bg-gray-100 p-2 rounded">{name}</h1>
      </div>
    </div>
  );
};

export default booking;
