// eslint-disable-next-line @typescript-eslint/no-unused-vars

import Card from "../Card/Card";
import { useCards } from "../../hooks/CardsContext";

const CardsContainer = () => {
  const cards = useCards();

  return (
    <div className="CardContainer">
      {cards.map((card) => (
        <div className={`card-${card.id}`} key={card.id}>
          <Card
            title={card.title}
            imageUrl={card.imageUrl}
            text={card.text}
            productLink={card.productLink}
            phoneNumber="1995681352"
          />
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
