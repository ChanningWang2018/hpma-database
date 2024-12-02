import React from "react";

const Description = ({ description }) => {
  return (
    <div className="description">
      {description.split("\n").map((line, index) => {
        if (line.includes("*")) {
          const items = line
            .split("*")
            .filter(Boolean)
            .map((item, i) => <li key={i}>{item.trim()}</li>);
          return <ul key={index}>{items}</ul>;
        } else {
          return (
            <p key={index}>
              {line}
              <br />
            </p>
          );
        }
      })}
    </div>
  );
};

export default Description;
