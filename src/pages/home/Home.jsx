import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import Button from "../../components/Button";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../Loading";
const Home = () => {
  const fakeData = useLoaderData();
  const navigate = useNavigation();
  const [contentData, setContentData] = useState(fakeData[0]);
  const onClickHandler = (id) => {
    const findElement = fakeData.find((place) => place.id === id);
    // setContentData(contentData);
    setContentData(findElement);
  };
  if (navigate.state === "loading") {
    return <Loading />;
  }
  return (
    <>
      <div className=" lg:py-10  flex flex-col lg:flex-row justify-between">
        <div className="max-w-lg p-8">
          <h1 className="text-white lg:text-6xl text-4xl font-bold pb-4">
            {contentData?.name}
          </h1>
          <p className="text-gray-300 h-28">
            {contentData?.description.slice(0, 200)}...
          </p>
          <Link to={`/booking/${contentData.id}`}>
            <Button>Booking</Button>
          </Link>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 3800,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          keyboard={{
            enabled: true,
          }}
          modules={[Autoplay, Pagination, Navigation, Keyboard]}
          className="mx-0  max-w-3xl "
        >
          {fakeData.map((place, index) => {
            return (
              <SwiperSlide className="" key={index}>
                {({ isActive }) => (
                  <div>
                    {isActive && onClickHandler(place.id)}
                    <div>
                      <div
                        className={`w-[240px] h-96 ${
                          isActive &&
                          "border-[3px] border-orange-400 duration-200 border-opacity-100 transition rounded-[20px]"
                        }`}
                      >
                        <img
                          className="w-full  h-full rounded-2xl object-cover "
                          src={place?.image}
                          alt=""
                        />
                      </div>
                      <div className="absolute bottom-5 left-5">
                        <h1 className="text-xl font-semibold text-gray-200">
                          {place?.name}
                        </h1>
                      </div>
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
