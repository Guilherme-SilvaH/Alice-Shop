import { useCards } from "src/Hooks/CardsProvider";
import Card from "../Card/Card";
import { CardData } from "src/Interface/ICardData.tsx";
import "./CardsContainer.scss";

const CardsContainer = () => {
  const cards = useCards();

  return (
    <div className="CardContainer">
      <div className="cards">
        {cards.map((card: CardData) => (
          <div className={`card`} key={card.id}>
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
    </div>
  );
};

export default CardsContainer;
