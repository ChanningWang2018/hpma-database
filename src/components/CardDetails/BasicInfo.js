import React from "react";

const titleCase = (input) => {
  if (Array.isArray(input)) {
    return input.map((item) => titleCase(item)).join(", ");
  } else if (typeof input === "string") {
    return input
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/^[a-z]/, (match) => match.toUpperCase())
      .replace(/\b([a-z])/g, (match) => match.toUpperCase());
  } else {
    return input;
  }
};

const BasicInfo = ({ card }) => {
  return (
    <div className="basic-info">
      <p>
        <strong>Category:</strong> {titleCase(card.category)}
      </p>
      <p>
        <strong>Type:</strong> {titleCase(card.type)}
      </p>
      <p>
        <strong>Rarity:</strong> {titleCase(card.rarity)}
      </p>
      <p>
        {card.mp && (
          <p>
            {/* companion cards don't cost mp. */}
            <strong>MP:</strong> {card.mp}
          </p>
        )}
      </p>
    </div>
  );
};

export default BasicInfo;
