import rumahSatu from "/public/img/rumah1.jpeg";

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
            <div className="border-black border py-2">
              <form className="mx-5" action="">
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
                <button className="w-full  py-2 text-white font-medium text-md bg-gray-800 hover:bg-gray-900" type="button">Continue</button>
              </form>
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
