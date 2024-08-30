import React from "react";
import rumahSatu from "../assets/img/rumah1.jpeg";
import googleIcon from "../assets/icons/google.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import appleIcon from "../assets/icons/apple.svg";

const Form = () => {
  return (
    <div className="container flex min-h-screen mx-auto">
      {/* Form Section */}
      <div className="flex items-center justify-center w-2/5 min-h-screen leading-10">
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
          <div className="mt-4 flex items-center justify-center">
            <p className="text-md text-center ">
              By signing in or creating an account, you agree to our{" "}
              <span className="font-medium underline">Terms & Conditions</span>{" "}
              and{" "}
              <span className="font-medium underline">Privacy Statement</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Cover Image Section */}
      <div className="relative w-3/5 h-full flex items-center m-2">
        <img
          className="w-full h-screen object-cover rounded-xl "
          src={rumahSatu}
          alt="Architectural House in front of a Pool"
        />
      </div>
    </div>
  );
};

export default Form;
