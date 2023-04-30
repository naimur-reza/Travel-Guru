import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
const Home = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("/public/places.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  return (
    <>
      <div className="flex justify-between py-10">
        <div className="max-w-3xl">
          <h1>content is comingg</h1>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 2500,
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
                <div className="relative">
                  <img
                    className=" to-blue-500 h-80 w-64  rounded-2xl bg-center object-fill"
                    src={place?.image}
                    alt=""
                  />
                  <div className="absolute bottom-5 left-5">
                    <h1 className="text-xl font-semibold text-gray-200">
                      {place?.name}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Home;
