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
        <div className="w-full flex items-center text-gray-400 mb-4">
          <hr className="flex-grow border-gray-400" />
          <p className="mx-2 text-center font-semibold">or</p>
          <hr className="flex-grow border-gray-400" />
        </div>
        {/* social media login */}
        <div className="grid gap-2 text-center">
          {[
            {
              src: googleIcon,
              alt: "Google icon",
              text: "Continue with Google",
            },
            { src: appleIcon, alt: "Apple icon", text: "Continue with Apple" },
            {
              src: facebookIcon,
              alt: "Facebook icon",
              text: "Continue with Facebook",
            },
          ].map(({ src, alt, text }) => (
            <button
              key={alt}
              className="w-full flex items-center justify-center h-10 border rounded-md text-black font-medium hover:bg-gray-700 hover:text-white"
              type="button"
            >
              <img className="w-5 mr-2 hidden sm:block" src={src} alt={alt} />
              <span className="hidden sm:inline">{text}</span>
              <img className="w-5 sm:hidden" src={src} alt={alt} />
            </button>
          ))}
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
