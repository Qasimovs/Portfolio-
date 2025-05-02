import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wishlist from "./components/Wishlist";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; // varsa

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

export default App;
