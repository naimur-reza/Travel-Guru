import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import MyBookingsCard from "./MyBookingsCard";
import { toast } from "react-hot-toast";
import Loading from "./Loading";

const MyBookings = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading />;
  }
  const [myBookings, setMyBookings] = useState(data);
  const handleDelete = (id) => {
    fetch(`https://myapp-beige-eight.vercel.app/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = myBookings.filter((b) => b._id !== id);
        setMyBookings(remaining);
        toast.success("Successfully Removed");
      });
  };
  return (
    <div className="my-container  px-5">
      <h1 className=" text-3xl font-bold mb-5 pt-5">
        My Total Bookings is : {myBookings.length}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 pt-5 gap-5 place-items-center">
        {myBookings?.map((booking) => (
          <MyBookingsCard
            key={booking._id}
            booking={booking}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
