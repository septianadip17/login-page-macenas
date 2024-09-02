import React from "react";
import FormSection from "../components/FormSection";
import CoverImageSection from "../components/CoverImageSection";
import rumahDua from "../assets/img/rumah2.jpeg";

const CreatePassword = () => {
  return (
    <main className="w-full flex min-h-screen mx-auto">
      <FormSection
        title="Create Password"
        description="Use a minimum of 10 characters, including uppercase letters, lowercase letters, and numbers."
      >
        <input
          className="w-full h-10 p-2 mb-2 border rounded-s-sm"
          type="password"
          placeholder="Password"
        />
        <input
          className="w-full h-10 p-2 mb-2 border rounded-s-sm"
          type="password"
          placeholder="Confirm Password"
        />
        <button
          className="w-full py-2 mb-4 text-white font-medium bg-black hover:bg-gray-700"
          type="button"
        >
          Continue
        </button>
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
