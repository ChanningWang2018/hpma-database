import React from "react";
import "./Card.css";

function Card({ name, image, rarity, mp, link }) {
  const rarityColors = {
    common: "#ffffff", // Gray
    rare: "#00aaff", // Blue
    epic: "#a020f0", // Purple
    legendary: "#ffbf00", // Gold
    mythic: "#d3d3d3", // White
    dark: "#006400", // Dark Green
  };

  return (
    <a href={link} className="card-link">
      <div
        className="card"
        style={{ borderColor: rarityColors[rarity.toLowerCase()] || "#ddd" }}
      >
        <div className="card-image-container">
          <img
            src={image || "https://via.placeholder.com/200"}
            alt={name}
            className="card-image"
          />
          {mp !== null && <div className="card-mana-cost">{mp}</div>}
          <div className="card-name-overlay">{name}</div>
        </div>
      </div>
    </a>
  );
}

export default Card;
