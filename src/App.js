import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Robots from "./pages/Robots";
import Autons from "./pages/Autons";
import Stats from "./pages/Stats";
import Contact from "./pages/Contact";
import Info from "./pages/Info";
import './App.css';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-logo">🤖 VEX Explorer</div>
    <nav className="navbar-links">
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>Home</NavLink>
      <NavLink to="/robots" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Robots</NavLink>
      <NavLink to="/autons" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Autons</NavLink>
      <NavLink to="/stats" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Stats</NavLink>
      <NavLink to="/info" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Info</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
    </nav>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/robots" element={<Robots />} />
          <Route path="/autons" element={<Autons />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
