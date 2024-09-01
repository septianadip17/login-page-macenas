import Form from "./components/Form";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

function App() {
  return (
    <main className="w-full flex min-h-screen mx-auto">
      <LeftSide />
      <RightSide />
    </main>
  );
}

export default App;
