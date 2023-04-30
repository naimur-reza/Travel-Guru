import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-[calc(100vh-85px)] flex justify-center items-center">
      <ScaleLoader height={60} color="#f7a13b" />
    </div>
  );
};

export default Loading;
