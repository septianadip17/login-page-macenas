import React from "react";
import { useNavigate } from "react-router-dom";
import FormSection from "../components/FormSection";
import CoverImageSection from "../components/CoverImageSection";
import Button from "../components/Button";
import InputField from "../components/InputField";
import rumahDua from "../assets/img/rumah2.jpeg";

const CreatePassword = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/enter-otp");
  };

  return (
    <main className="w-full flex min-h-screen mx-auto">
      <FormSection
        title="Create Password"
        description="Use a minimum of 10 characters, including uppercase letters, lowercase letters, and numbers."
      >
        <InputField type="password" placeholder="Password" />
        <InputField type="password" placeholder="Confirm Password" />
        <Button onClick={handleContinue}>Continue</Button>
      </FormSection>
      <CoverImageSection
        backgroundImage={rumahDua}
        quote="Our stay at Hotel Macenas was absolutely delightful! From the friendly staff to clean and comfortable rooms, it truly exceeded our expectations."
        author="Randy Bator • Founder & CEO"
      />
    </main>
  );
};

export default CreatePassword;
