import React from "react";
import { FaTrash } from "react-icons/fa";

const MyBookingsCard = ({ booking, handleDelete }) => {
  const { title, room, _id } = booking;
  return (
    <div className="max-w-sm flex shadow-lg flex-col justify-between  rounded-lg   bg-gray-300">
      <div>
        <img className="rounded-t-lg" src={room?.sinleroom} alt="" />
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {room.title1}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 ">
            {room?.description1}
          </p>
        </div>
      </div>
      <button
        onClick={() => handleDelete(_id)}
        href="#"
        className="inline-flex  items-center px-3 py-2 text-sm bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all">
        <span className="inline-flex gap-2 mx-auto">
          Remove From Booking <FaTrash />
        </span>
      </button>
    </div>
  );
};

export default MyBookingsCard;
