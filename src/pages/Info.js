import React from "react";
import "./Info.css";

const Info = () => (
  <div className="info-bg">
    <h2 className="info-title">About VEX Explorer</h2>
    <div className="info-content">
      <p>
        <b>VEX Explorer</b> is a community-driven platform for VEX Robotics teams to showcase their robots, autonomous routines, and team stats.<br/>
        Discover what other teams are building, get inspired, and share your own creations!
      </p>
      <p>
        <b>Features:</b><br/>
        - Browse robots and autons from teams worldwide<br/>
        - View team stats and awards<br/>
        - Modern, animated, and responsive design
      </p>
      <p style={{ marginTop: 32, color: '#00f2fe' }}>
        Made with ❤️ for the VEX community.<br/>
        <span style={{ fontSize: '1rem', color: '#b2bec3' }}>Design by Shiv</span><br/>
        <span style={{ fontSize: '1rem', color: '#b2bec3' }}>Team #: <b>9924X</b></span><br/>
        <span style={{ fontSize: '1rem', color: '#b2bec3' }}>Contact: <a href="mailto:s.vakil2009@gmail.com" style={{ color: '#00f2fe', textDecoration: 'underline' }}>s.vakil2009@gmail.com</a></span>
      </p>
    </div>
  </div>
);

export default Info; 