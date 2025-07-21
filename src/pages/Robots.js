import React from "react";
import "./Robots.css";

const robots = [
  { team: "1234A", name: "Clawbot", image: "https://via.placeholder.com/200", description: "A versatile robot with a claw and lift." },
  { team: "5678B", name: "StackMaster", image: "https://via.placeholder.com/200", description: "Designed for stacking and fast movement." },
];

const Robots = () => (
  <div className="robots-bg">
    <h2 className="robots-title">Robots</h2>
    <div className="robots-list">
      {robots.map((robot, idx) => (
        <div key={robot.team} className="robot-card" style={{ animationDelay: `${idx * 0.2}s` }}>
          <img src={robot.image} alt={robot.name} className="robot-img" />
          <h3 className="robot-name">{robot.name} <span className="robot-team">({robot.team})</span></h3>
          <p className="robot-desc">{robot.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Robots; 