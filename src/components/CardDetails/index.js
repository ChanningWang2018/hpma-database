import React from "react";
import cardsData from "/static/data/cards.json";
import BasicInfo from "./BasicInfo";
import Description from "./Description";
import Stats from "./Stats";

/**
 * CardDetails component to display detailed information about a specific card.
 *
 * @param {object} props - Component props.
 * @param {string} props.slug - The unique identifier of the card.
 * @param {boolean} [props.showBasicInfo=false] - Whether to show the basic info section.
 * @param {boolean} [props.showDescription=false] - Whether to show the description section.
 * @param {boolean} [props.showStats=false] - Whether to show the stats section.
 * @returns {JSX.Element} - The rendered CardDetails component.
 */
const CardDetails = ({
  slug,
  showBasicInfo = false,
  showDescription = false,
  showStats = false,
}) => {
  // Ensure cardsData exists and is an array
  const cardsDataSafe = cardsData?.data || [];

  // Find the card data based on the provided slug
  const card = cardsDataSafe.find((card) => card.slug === slug);

  // If the card is not found, return a "Card not found" message
  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className="card-details">
      {/* Conditionally render the BasicInfo component if showBasicInfo is true */}
      {showBasicInfo && <BasicInfo card={card} />}

      {/* Conditionally render the Description component if showDescription is true */}
      {showDescription && (
        <>
          <Description description={card.description} />
        </>
      )}

      {/* Conditionally render the Stats component if showStats is true */}
      {showStats && (
        <>
          <Stats stats={card.stats} />
        </>
      )}
    </div>
  );
};

export default CardDetails;
