import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-orange-400 inline-flex items-center gap-2  px-6 py-2 rounded-md hover:bg-orange-500 duration-200">
      {children}
    </button>
  );
};

export default Button;
