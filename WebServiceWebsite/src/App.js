import React from "react";
import Home from "./Components/Home";
import { Routes, Route ,Navigate } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Service from "./Components/Service";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route
          path="*"                          
          element={<Navigate to="/" />}
        />
      </Routes>
       <Footer/>
    </>
  )
}

export default App;
