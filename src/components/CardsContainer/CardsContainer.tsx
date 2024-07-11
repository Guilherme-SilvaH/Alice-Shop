import React from "react";
import { useCards, CardData } from "../../hooks/CardsContext";

const CardsContainer: React.FC = () => {
  const cards = useCards();

  return (
    <div>
      {cards.map((card: CardData) => (
        <div key={card.id}>
          <h2>{card.title}</h2>
          <img src={card.imageUrl} alt={card.title} />
          <p>{card.text}</p>
          <a href={`tel:${card.phoneNumber}`}>Call</a>
          <a href={card.productLink}>Product Link</a>
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
