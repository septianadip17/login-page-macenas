/* eslint-disable react/prop-types */
import React from "react";

const FormSection = ({ title, description, children }) => {
  return (
    <form className="flex items-center justify-center lg:w-2/5 min-h-screen leading-5 border-2 border-purple-500">
      <div className="w-full p-28 border-2 border-yellow-400">
        <h1 className="text-3xl font-medium mb-4">{title}</h1>
        <p className="mb-6">{description}</p>
        {children}
        <footer className="mt-4 flex items-center justify-center leading-5">
          <p className="text-md text-center">
            By signing in or creating an account, you agree to our{" "}
            <span className="font-medium underline">Terms & Conditions</span>{" "}
            and <span className="font-medium underline">Privacy Statement</span>
            .
          </p>
        </footer>
      </div>
    </form>
  );
};

export default FormSection;
