import React from "react";
import FormSection from "../components/FormSection";
import CoverImageSection from "../components/CoverImageSection";
import googleIcon from "../assets/icons/google.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import appleIcon from "../assets/icons/apple.svg";
import rumahSatu from "../assets/img/rumah1.jpeg";

const Login = () => {
  return (
    <main className="w-full flex min-h-screen mx-auto">
      <FormSection
        title="Sign in or create an account"
        description="Welcome back! Please enter your details."
      >
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
        <div className="w-full grid grid-cols-3 items-center text-gray-400 mb-4">
          <hr className="border-gray-400" />
          <p className="text-center font-semibold">or</p>
          <hr className="border-gray-400" />
        </div>
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
            <img className="w-5 mr-2" src={facebookIcon} alt="Facebook icon" />
            Continue with Facebook
          </button>
        </div>
      </FormSection>
      <CoverImageSection
        backgroundImage={rumahSatu}
        quote="The curation is highly focused on design and the scene is a clever marketplace that allows users to replicate the design at home."
        author="Kaiya Carder • Freelancer"
      />
    </main>
  );
};

export default Login;
