import React from 'react'
import "./App.css";
import {
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import  Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div>
      
      <Navbar />

      <Routes>

        <Route
        path="/"
        element={<Home />} />

        <Route
        path="/shop"
        element={<Shop />} 
        />

        <Route
        path="/contact"
        element={<Contact />}
        />

      </Routes>
    </div>
  )
}

export default App