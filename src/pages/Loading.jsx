import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="lg:pt-[15%] pt-[60%] flex justify-center items-center">
      <ScaleLoader height={60} color="#f7a13b" />
    </div>
  );
};

export default Loading;
