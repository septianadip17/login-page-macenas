import React from "react";
import { useNavigate } from "react-router-dom";
import FormSection from "../components/FormSection";
import CoverImageSection from "../components/CoverImageSection";
import Button from "../components/Button";
import InputField from "../components/InputField";
import googleIcon from "../assets/icons/google.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import appleIcon from "../assets/icons/apple.svg";
import rumahSatu from "../assets/img/rumah1.jpeg";

const Login = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/create-password");
  };

  return (
    <main className="w-full flex min-h-screen mx-auto">
      <FormSection
        title="Sign in or create an account"
        description="Welcome back! Please enter your details."
      >
        <InputField type="text" placeholder="Name" />
        <InputField type="email" placeholder="Email Address" />
        <Button onClick={handleContinue}>Continue</Button>
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
