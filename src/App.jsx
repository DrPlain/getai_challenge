import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/registration" element={<RegisterPage />} />
          <Route path="/contact-form" element={<ContactPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
