import React from "react";
import Card from "./Card";
import cardsData from "/static/data/cards.json";
import "./CardsList.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function CardsList({ rarityFilter, mpFilter }) {
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig;
  // Ensure cardsData exists and is an array
  const cardsDataSafe = cardsData?.data || [];

  return (
    <div className="cards-list">
      {cardsDataSafe
        .filter((card) => !rarityFilter || card.rarity === rarityFilter)
        .filter((card) => !mpFilter || mpFilter.includes(card.mp))
        .map((card) => {
          return (
            <Card
              key={card.slug}
              name={card.name}
              image={`${baseUrl}img/cards/170x103/${card.slug}.jpg`}
              rarity={card.rarity}
              mp={card.mp}
              link={`${baseUrl}docs/spellbook/cards/${card.category}s/${card.slug}`}
            />
          );
        })}
    </div>
  );
}

export default CardsList;
