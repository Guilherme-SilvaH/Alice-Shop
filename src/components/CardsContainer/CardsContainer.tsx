import Card from "../Card/Card";
import { useCards } from "../../Hooks/CardsContext";

const CardsContainer = () => {
  const cards = useCards();

  return (
    <div className="CardContainer">
      {cards.map((card) => (
        <div className={`card${card.id}`} key={card.id}>
          <Card
            title={card.title}
            imageUrl={card.imageUrl}
            text={card.text}
            phoneNumber={card.phoneNumber}
            productLink={card.productLink}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
