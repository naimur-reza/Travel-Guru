import React from "react";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useLoaderData } from "react-router-dom";
const HotelDetails = () => {
  const hotels = useLoaderData();

  const { title, rooms } = hotels;
  const position = [51.505, -0.09];
  return (
    <div className="flex my-container p-5 py-10 justify-between flex-col lg:flex-row">
      <div>
        <h1 className="font-semibold text-lg">Stay in {title}</h1>
        <div>
          {rooms.map((room, index) => {
            return (
              <div className="flex gap-3  flex-col lg:flex-row " key={index}>
                <img className="w-80 my-5" src={room?.sinleroom} alt="" />
                <div className="my-5 space-y-3">
                  <p className="font-semibold">{room?.title1}</p>
                  <p className="text-gray-400">{room?.description1}</p>
                  <div className="space-x-3">
                    <span className=" inline-flex items-center gap-2">
                      <FaStar className="text-yellow-400" /> {room?.reviw}
                    </span>
                    <span className="text-gray-600 font-semibold inline-flex items-center">
                      <FaDollarSign />
                      {room?.price}/<span className="text-gray-400">night</span>
                    </span>
                    <span className="text-gray-400 font-semibold inline-flex items-center ">
                      <FaDollarSign /> 169 total
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="max-w-2xl overflow-hidden border">
        <MapContainer
          className="w-full"
          center={position}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default HotelDetails;
