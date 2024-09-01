import React from "react";
import rumahTiga from "../assets/img/rumah3.jpg";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
const EnterOtp = () => {
  const bgStyle = {
    backgroundImage: `url(${rumahTiga})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="w-full flex min-h-screen mx-auto">
      {/* Form Section */}
      <form className="flex items-center justify-center w-2/5 min-h-screen leading-10">
        <div className="w-full p-28">
          <h1 className="text-3xl font-medium mb-4">Enter the code</h1>
          <p className="mb-6 leading-5">
            Enter the ETP code that we sent to your email{" "}
            <strong>a*****y@gmail.com</strong> and be careful not be share the
            code with anyone.
          </p>
          <form>
            <div className="flex gap-2 justify-between">
              <input
                className="h-15 p-2 mb-2 size-12 text-center border border-black rounded-s-sm"
                type="otp"
                placeholder="0"
              />
              <input
                className="h-15 p-2 mb-2 size-12 text-center border border-black rounded-s-sm"
                type="otp"
                placeholder="0"
              />
              <input
                className="h-15 p-2 mb-2 size-12 text-center border border-black rounded-s-sm"
                type="otp"
                placeholder="0"
              />
              <input
                className="h-15 p-2 mb-2 size-12 text-center border border-black rounded-s-sm"
                type="otp"
                placeholder="0"
              />
              <input
                className="h-15 p-2 mb-2 size-12 text-center border border-black rounded-s-sm"
                type="otp"
                placeholder="0"
              />
            </div>
            <button
              className="w-full py-2 mb-4 text-white font-medium bg-black hover:bg-gray-700"
              type="button"
            >
              Continue
            </button>
          </form>
          <a href="#" className="text-sm font-semibold text-center underline ">
            Send code again
          </a>

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
              “Our stay at Hotel Macenas was absolutely delightful! From the
              friendly staff to clean and comfortable rooms, it trully exceeded
              our expectations.”
            </h1>
            <div className="flex items-center justify-between">
              <span className="text-normal">Randy Bator • Founder & CEO</span>
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

export default EnterOtp;
