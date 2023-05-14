import React from "react";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useLoaderData } from "react-router-dom";
import Button from "../components/Button";
import { toast } from "react-hot-toast";
const HotelDetails = () => {
  const hotels = useLoaderData();

  const { title, rooms } = hotels;
  const position = [51.505, -0.09];
  const handleBooking = (room) => {
    fetch("https://myapp-beige-eight.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title, room }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Booked Successfully");
        }
      });
  };
  return (
    <div className="flex my-container gap-3 p-5 py-10 justify-between flex-col lg:flex-row">
      <div>
        <h1 className="font-semibold text-lg">Stay in {title}</h1>
        <div>
          {rooms.map((room, index) => {
            return (
              <div
                className="flex gap-3 lg:w-[700px] flex-col lg:flex-row   mt-3  p-5 mb-3 shadow-lg rounded-md"
                key={index}>
                <img className="lg:w-80 w-full " src={room?.sinleroom} alt="" />
                <div className="w-full flex-col justify-between flex">
                  <div className=" space-y-3 ">
                    <p className="font-semibold text-lg">{room?.title1}</p>
                    <p className="text-gray-400">{room?.description1}</p>
                    <div className="space-x-3 w-full">
                      <span className=" inline-flex items-center gap-2 ">
                        <FaStar className="text-yellow-400 " />
                        <span className="font-semibold">{room?.reviw}(10)</span>
                      </span>
                      <span className="text-gray-600 font-semibold inline-flex items-center">
                        <FaDollarSign />
                        {room?.price}/
                        <span className="text-gray-400">night</span>
                      </span>
                      <span className="text-gray-400 font-semibold inline-flex items-center ">
                        <FaDollarSign /> 169 total
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleBooking(room)}
                    className=" block  bg-orange-500 px-4 py-2 rounded-full font-semibold text-white hover:bg-orange-600 transition-all">
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" rounded-md overflow-hidden ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
    </div>
  );
};

export default HotelDetails;
