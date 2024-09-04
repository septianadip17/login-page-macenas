/* eslint-disable react/prop-types */
import React from "react";

const InputField = ({ type, placeholder }) => {
  return (
    <input
      className="w-full h-10 p-2 mb-2 border rounded-s-sm"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputField;
