import React from "react";
import "./Stats.css";

const stats = [
  { team: "1234A", wins: 12, losses: 3, awards: ["Excellence", "Design"] },
  { team: "5678B", wins: 8, losses: 7, awards: ["Judges"] },
];

const Stats = () => (
  <div className="stats-bg">
    <h2 className="stats-title">Team Stats</h2>
    <table className="stats-table">
      <thead>
        <tr>
          <th>Team</th>
          <th>Wins</th>
          <th>Losses</th>
          <th>Awards</th>
        </tr>
      </thead>
      <tbody>
        {stats.map((stat, idx) => (
          <tr key={stat.team} className="stats-row" style={{ animationDelay: `${idx * 0.2}s` }}>
            <td>{stat.team}</td>
            <td>{stat.wins}</td>
            <td>{stat.losses}</td>
            <td>
              {stat.awards.map((award, i) => (
                <span key={award} className="award-badge" style={{ animationDelay: `${i * 0.15}s` }}>{award}</span>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Stats; 