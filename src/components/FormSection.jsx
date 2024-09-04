/* eslint-disable react/prop-types */
import React from "react";

const FormSection = ({ title, description, children }) => {
  return (
    <form className="flex items-center justify-center lg:w-2/5 w-full px-4 lg:px-0 min-h-screen">
      <div className="w-full lg:p-28 p-6">
        <h1 className="text-3xl font-medium mb-4">{title}</h1>
        <p className="mb-6">{description}</p>
        {children}
        <footer className="mt-4 flex items-center justify-center">
          <p className="text-sm text-center text-gray-600">
            By signing in or creating an account, you agree to our{" "}
            <span className="font-medium underline text-black">
              Terms & Conditions
            </span>{" "}
            and{" "}
            <span className="font-medium underline text-black">
              Privacy Statement
            </span>
            .
          </p>
        </footer>
      </div>
    </form>
  );
};

export default FormSection;
