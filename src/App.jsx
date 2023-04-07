import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";

function App() {
  return (
      <BrowserRouter basename="/">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/favs" element={<Favs/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/dentist/:id" element={<Detail/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    );
  }
  
  export default App;
  