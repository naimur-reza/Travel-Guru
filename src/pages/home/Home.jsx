import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
const Home = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  console.log();
  return (
    <>
      <div className=" py-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mx-0  max-w-3xl "
        >
          {places.map((place, index) => {
            return (
              <SwiperSlide className="overflow-hidden " key={index}>
                {({ isActive }) => (
                  <div
                    className={
                      isActive &&
                      "border-[3px] border-orange-400 rounded-[20px]"
                    }
                  >
                    <img
                      className="h-96 w-64  rounded-2xl object-center "
                      src={place?.image}
                      alt=""
                    />
                    <div className="absolute bottom-5 left-5">
                      <h1 className="text-xl font-semibold text-gray-200">
                        {place?.name}
                      </h1>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Home;
// <SwiperSlide key={index}>
//   {({ isActive }) => (
//     <div
//       className={`relative ${
//         isActive && "border-[5px]"
//       } border-primary h-[500px]  rounded-xl w-full bg-cover bg-center`}
//     >
//       <img
//         src={destination?.image}
//         alt={destination?.title}
//         className="w-full h-full object-cover"
//       />
//       <div className="absolute top-72 left-10  flex flex-col items-center justify-center text-white text-center  transition-opacity duration-300">
//         <h2 className="text-4xl font-bold">
//           {destination?.title}
//         </h2>
//       </div>
//     </div>
//   )}
// </SwiperSlide>;
