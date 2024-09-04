import React from "react";
import FormSection from "../components/FormSection";
import CoverImageSection from "../components/CoverImageSection";
import rumahTiga from "../assets/img/rumah3.jpg";

const EnterOtp = () => {
  return (
    <main className="w-full flex min-h-screen mx-auto">
      <FormSection
        title="Enter the code"
        description="Enter the OTP code that we sent to your email and be careful not to share the code with anyone."
      >
        <div className="flex gap-2 justify-between">
          {[...Array(5)].map((_, index) => (
            <input
              key={index}
              className="w-1/5 h-12 p-2 mb-5 text-center text-lg font-bold border border-black rounded-md"
              type="text"
              placeholder="0"
              maxLength="1"
            />
          ))}
        </div>
        <button
          className="w-full py-2 mb-4 text-white font-medium bg-black hover:bg-gray-700"
          type="button"
        >
          Continue
        </button>
        <a
          href="#"
          className="text-sm font-semibold text-center underline block"
        >
          Send code again
        </a>
      </FormSection>
      <CoverImageSection
        backgroundImage={rumahTiga}
        quote="I am very pleased with the facilities provided by Hotel Macenas. Their spa is the best I've ever experienced."
        author="Kianna Bergson • Artist"
      />
    </main>
  );
};

export default EnterOtp;
