import "./App.css";
import rumahSatu from "/public/img/rumah1.jpeg";

function App() {
  return (
    <>
    <div className="flex flex-col">
      <div className="form w-1/3">
        <h1>Sign in or create an account</h1>
        <p>Welcome back! Please enter your details.</p>
        <input type="text" />
        <input type="password" />
      </div>
      <div className="image-header w-2/3">
        <img src={rumahSatu} alt="Architectural House in front of a Pool" />
      </div>
    </div>
    </>
  );
}

export default App;
