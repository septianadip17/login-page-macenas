import rumahSatu from "/public/img/rumah1.jpeg";

function App() {
  return (
    <>
    <div className="container w-full flex min-h-screen items-start">
      <div className="relative w-1/3">
        <h1 className="flex text-3xl text-center">Sign in or create an account</h1>
        <p>Welcome back! Please enter your details.</p>
        <input type="text" />
        <input type="password" />
      </div>
      <div className="relative w-2/3 h-full flex flex-col">
        <img className="w-full h-full object-cover rounded-sm" src={rumahSatu} alt="Architectural House in front of a Pool" />
      </div>
    </div>
    </>
  );
}

export default App;
