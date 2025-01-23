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
      <Footer />
    </div>
  );
}

export default App;
