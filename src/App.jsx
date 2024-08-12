import rumahSatu from "/public/img/rumah1.jpeg";
import googleIcon from "/public/icons/google.svg";
import facebookIcon from "/public/icons/facebook.svg";
import appleIcon from "/public/icons/apple.svg";

function App() {
  return (
    <>
      <div className="w-full flex min-h-screen items-start">
        {/* Form */}
        <div className="relative w-1/3 mx-20 my-20">
          <div className="justify-center align-center w-9/12 border border-black">
            <h1 className="text-3xl font-medium">
              Sign in or create an account
            </h1>
            <p className="">Welcome back! Please enter your details.</p>
            <form className="" action="">
              <input
                className="w-full border my-2 h-10 p-2 rounded-lg"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-full mb-2 border h-10 p-2 rounded-lg"
                type="email"
                placeholder="Email Address"
              />
              <button
                className="w-full py-2 text-white font-medium text-md bg-black hover:bg-gray-700"
                type="button"
              >
                Continue
              </button>
              {/* Horizontal Line */}
              <div className="w-full mt-4 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400" />
                <p className="text-center font-semibold">or</p>
                <hr className="border-gray-400" />
              </div>
            </form>

            {/* Social Media Sign In */}
            <div className="grid grid-rows-3 text-center items-center">
              <button
                className="w-full flex border rounded-md mt-2 text-center text-black font-medium text-md hover:bg-gray-700"
                type="button"
              >
                <img className="w-5" src={googleIcon} alt="google icon" />
                Continue with Google
              </button>
              <button
                className="w-full flex border rounded-md mt-2 text-center text-black font-medium text-md hover:bg-gray-700"
                type="button"
              >
                <img className="w-5" src={appleIcon} alt="apple icon" />
                Continue with Apple
              </button>
              <button
                className="w-full flex border rounded-md mt-2 text-center text-black font-medium text-md hover:bg-gray-700"
                type="button"
              >
                <img className="w-5" src={facebookIcon} alt="facebook icon" />
                Continue with Facebook
              </button>

              {/* Footer */}
              <div className="mt-4">
                <p>
                  by signing in or creating an account, you agree with our{" "}
                  <span>Terms & Conditions</span> and{" "}
                  <span className="text-bold">Privacty Statement</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative w-2/3 h-full flex flex-col">
          <img
            className="w-full h-full object-cover rounded-sm"
            src={rumahSatu}
            alt="Architectural House in front of a Pool"
          />
        </div>
      </div>
    </>
  );
}

export default App;
