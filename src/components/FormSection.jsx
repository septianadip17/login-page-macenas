/* eslint-disable react/prop-types */
import React from "react";

const FormSection = ({ title, description, children }) => {
  return (
    <form className="flex items-center justify-center w-2/5 min-h-screen leading-10">
      <div className="w-full p-28">
        <h1 className="text-3xl font-medium mb-4">{title}</h1>
        <p className="mb-6">{description}</p>
        {children}
      </div>
    </form>
  );
};

export default FormSection;
