import React from "react";
import "./Autons.css";

const autons = [
  { team: "1234A", name: "Left Side 6pt", video: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Scores 6 points from the left starting position." },
  { team: "5678B", name: "Center Rush", video: "https://www.youtube.com/embed/dQw4w9WgXcQ", description: "Rushes center for quick scoring." },
];

const Autons = () => (
  <div className="autons-bg">
    <h2 className="autons-title">Autonomous Routines</h2>
    <div className="autons-list">
      {autons.map((auton, idx) => (
        <div key={auton.team + auton.name} className="auton-card" style={{ animationDelay: `${idx * 0.2}s` }}>
          <iframe width="300" height="170" src={auton.video} title={auton.name} frameBorder="0" allowFullScreen className="auton-video"></iframe>
          <h3 className="auton-name">{auton.name} <span className="auton-team">({auton.team})</span></h3>
          <p className="auton-desc">{auton.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Autons; 