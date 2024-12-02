import React from "react";

const titleCase = (input) => {
  if (Array.isArray(input)) {
    return input.map((item) => titleCase(item));
  } else if (typeof input === "string") {
    return input
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/^[a-z]/, (match) => match.toUpperCase())
      .replace(/\b([a-z])/g, (match) => match.toUpperCase());
  } else {
    return input;
  }
};

const renderStaticStats = (staticStats) => {
  if (!staticStats || Object.keys(staticStats).length === 0) {
    return;
  }

  return Object.entries(staticStats).map(([key, value]) => (
    <div key={key}>
      <strong>{titleCase(key)}</strong>: {titleCase(value)}
    </div>
  ));
};

const renderDynamicStats = (dynamicStats) => {
  if (!dynamicStats || dynamicStats.length === 0) {
    return;
  }

  return (
    <table className="dynamic-table">
      <thead>
        <tr>
          {Object.keys(dynamicStats[0]).map((key, index) => (
            <th key={index}>{titleCase(key)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dynamicStats.map((stat, rowIndex) => (
          <tr key={rowIndex}>
            {Object.values(stat).map((value, colIndex) => (
              <td key={colIndex}>{value || "Unknown"}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const renderStats = (stats) => {
  if (!stats || Object.keys(stats).length === 0) {
    return;
  }
  if (Array.isArray(stats)) {
    return stats.map((member, memberIndex) => (
      <div key={memberIndex} className="member-stats">
        <h3>{titleCase(member.member)}</h3>
        <div>{renderStaticStats(member.static)}</div>
        <br />
        <div>{renderDynamicStats(member.dynamic)}</div>
        <hr />
      </div>
    ));
  } else {
    return (
      <div>
        <div>{renderStaticStats(stats.static)}</div>
        <br />
        <div>{renderDynamicStats(stats.dynamic)}</div>
      </div>
    );
  }
};

const Stats = ({ stats }) => {
  return <div className="stats">{renderStats(stats)}</div>;
};

export default Stats;
