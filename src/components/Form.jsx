import React from "react";
import rumahSatu from "../assets/img/rumah1.jpeg";
import googleIcon from "../assets/icons/google.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import appleIcon from "../assets/icons/apple.svg";

const Form = () => {
  return (
    <div className="flex min-h-screen items-center justify-center border border-red-500">
      {/* Form Section */}
      <div className="relative w-2/5 min-h-screen mx-20 my-20 border border-red-500">
        <div className="h-screen w-full border border-black p-6">
          <h1 className="text-3xl font-medium mb-4">
            Sign in or create an account
          </h1>
          <p className="mb-6">Welcome back! Please enter your details.</p>
          <form>
            <input
              className="w-full h-10 p-2 mb-2 border rounded-lg"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full h-10 p-2 mb-2 border rounded-lg"
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
          <div className="mt-4">
            <p className="text-sm">
              By signing in or creating an account, you agree to our{" "}
              <span className="font-medium underline">Terms & Conditions</span>{" "}
              and{" "}
              <span className="font-medium underline">Privacy Statement</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Cover Image Section */}
      <div className="relative w-3/5 h-full flex flex-col mt-2 p-4 border border-red-500">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={rumahSatu}
          alt="Architectural House in front of a Pool"
        />
      </div>
    </div>
  );
};

export default Form;
