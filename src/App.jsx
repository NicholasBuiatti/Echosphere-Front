import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="h-screen">
        <NavBar />
        <div className="flex items-center justify-center backg h-[calc(100vh-5rem)]">
          <h1 className="text-white text-4xl">EchoSphere</h1>
        </div>
      </div>
    </>
  );
}

export default App;
