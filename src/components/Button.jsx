/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="w-full py-2 mb-4 text-white font-medium bg-black hover:bg-gray-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
