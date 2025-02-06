import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="h-screen">
      <Router>
        <AppRouter />
      </Router>
      <hr />
      <div className="bg-emerald-100 p-3">
        <Footer />
      </div>
    </div>
  );
}

export default App;
