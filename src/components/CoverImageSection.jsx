/* eslint-disable react/prop-types */
import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const CoverImageSection = ({ backgroundImage, quote, author }) => {
  const bgStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      style={bgStyle}
      className="container lg:w-3/5 rounded-xl flex flex-col justify-end m-2"
    >
      <div className="inset-0 bg-black bg-opacity-20 flex items-center justify-center rounded-b-xl p-8">
        <div className="text-white rounded-lg max-w-2xl">
          <h1 className="text-3xl font-normal mb-4">“{quote}”</h1>
          <div className="flex items-center justify-between">
            <span className="text-normal">{author}</span>
            <div className="flex space-x-4">
              <button className="bg-secondary text-secondary-foreground p-2 rounded-full hover:bg-secondary/80">
                <GoArrowLeft className="w-6 h-6" />
              </button>
              <button className="bg-secondary text-secondary-foreground p-2 rounded-full hover:bg-secondary/80">
                <GoArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverImageSection;
