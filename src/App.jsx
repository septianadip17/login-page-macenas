import Form from "./components/Form";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";


function App() {
  return (
    <div className="w-full flex min-h-screen mx-auto">
      {/* <Form/> */}
      <LeftSide/>
      <RightSide/>
    </div>
  );
}

export default App;
