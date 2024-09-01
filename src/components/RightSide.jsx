import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import rumahSatu from "../assets/img/rumah1.jpeg";

const RightSide = () => {
  const bgStyle = {
    backgroundImage: `url(${rumahSatu})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      style={bgStyle}
      className="container w-3/5 rounded-xl flex flex-col justify-end m-2"
    >
      {/* Cover Image Section */}
      <div className="inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-b-xl p-8">
        <div className="text-white rounded-lg max-w-2xl">
          <h1 className="text-3xl font-normal mb-4">
            “The curation is highly focused on design and the scene is a clever
            marketplace that allows users to replicate the design at home.”
          </h1>
          <div className="flex items-center justify-between">
            <span className="text-normal">Kaiya Carder • Freelancer</span>
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

export default RightSide;
