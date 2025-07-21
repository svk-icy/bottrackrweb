import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-bg">
      <h1 className="home-title">Welcome to VEX Robotics Team Explorer</h1>
      <p className="home-desc">Browse robots, autonomous routines, and team stats from VEX teams around the world!</p>
      <div className="home-cta" onClick={() => navigate('/robots')}>Start Exploring</div>
    </div>
  );
};

export default Home; 