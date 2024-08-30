import React from "react";
import rumahSatu from "../assets/img/rumah1.jpeg";
import googleIcon from "../assets/icons/google.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import appleIcon from "../assets/icons/apple.svg";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
const Form = () => {
  const bgStyle = {
    backgroundImage: `url(${rumahSatu})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="w-full flex min-h-screen mx-auto">
      {/* Form Section */}
      <form className="flex items-center justify-center w-2/5 min-h-screen leading-10">
        <div className="w-full p-28">
          <h1 className="text-3xl font-medium mb-4">
            Sign in or create an account
          </h1>
          <p className="mb-6">Welcome back! Please enter your details.</p>
          <form>
            <input
              className="w-full h-10 p-2 mb-2 border rounded-s-sm"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full h-10 p-2 mb-2 border rounded-s-sm"
              type="email"
              placeholder="Email Address"
            />
            <button
              className="w-full py-2 mb-4 text-white font-medium bg-black hover:bg-gray-700"
              type="button"
            >
              Continue
            </button>
            {/* Horizontal Line */}
            <div className="w-full grid grid-cols-3 items-center text-gray-400 mb-4">
              <hr className="border-gray-400" />
              <p className="text-center font-semibold">or</p>
              <hr className="border-gray-400" />
            </div>
          </form>

          {/* Social Media Sign In */}
          <div className="grid gap-2 text-center">
            <button
              className="w-full flex items-center justify-center h-10 border rounded-md text-black font-medium hover:bg-gray-700 hover:text-white"
              type="button"
            >
              <img className="w-5 mr-2" src={googleIcon} alt="Google icon" />
              Continue with Google
            </button>
            <button
              className="w-full flex items-center justify-center h-10 border rounded-md text-black font-medium hover:bg-gray-700 hover:text-white"
              type="button"
            >
              <img className="w-5 mr-2" src={appleIcon} alt="Apple icon" />
              Continue with Apple
            </button>
            <button
              className="w-full flex items-center justify-center h-10 border rounded-md text-black font-medium hover:bg-gray-700 hover:text-white"
              type="button"
            >
              <img
                className="w-5 mr-2"
                src={facebookIcon}
                alt="Facebook icon"
              />
              Continue with Facebook
            </button>
          </div>

          {/* Footer */}
          <footer className="mt-4 flex items-center justify-center leading-5">
            <p className="text-md text-center">
              By signing in or creating an account, you agree to our{" "}
              <span className="font-medium underline">Terms & Conditions</span>{" "}
              and{" "}
              <span className="font-medium underline">Privacy Statement</span>.
            </p>
          </footer>
        </div>
      </form>

      {/* Cover Image Section */}
      <div
        style={bgStyle}
        className="container w-3/5 rounded-xl flex flex-col justify-end m-2"
      >
        <div className="inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-b-xl p-8">
          <div className="text-white rounded-lg max-w-2xl">
            <h1 className="text-3xl font-normal mb-4">
              “The curation is highly focused on design and the scene is a
              clever marketplace that allows users to replicate the design at
              home.”
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
    </div>
  );
};

export default Form;
