import "./App.css";
import Navbar from "./MyComponents/Navbar";
import Alert from "./MyComponents/Alert";
import TextForm from "./MyComponents/TextForm";
import About from "./MyComponents/About";
import Footer from "./MyComponents/Footer";
import { useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null); 

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    // Hide the alert after 1.5 seconds
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40'; // Dark background
      document.body.style.color = 'white'; // Light text
      showAlert("Dark mode has been enabled!", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Light background
      document.body.style.color = 'black'; // Dark text
      showAlert("Light mode has been enabled!", "success");
    }
  };

  return (
    <>
      <Router> {/* Move Router here to wrap all components */}
        <Navbar mode={mode} toggleMode={toggleMode} /> {/* Navbar must be inside Router */}
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route path="/about" element={<About />} /> {/* Use element instead of component */}
            <Route path="/" element={<TextForm heading="Enter the text to analyze below:-" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
        <Footer />
      </Router> {/* Router ends here */}
    </>
  );
}

export default App;
