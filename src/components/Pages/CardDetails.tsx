import React from "react";

interface CardProps {
  id: number;
  title: string;
  imageUrl: string;
  text: string;
  phoneNumber: string;
  productLink: string;
}

const CardDetails: React.FC<{ card: CardProps }> = ({ card }) => {
  return (
    <div className="CardDetails">
      <h2>{card.title}</h2>
      <img src={card.imageUrl} alt={card.title} />
      <p>{card.text}</p>
    </div>
  );
};

export default CardDetails;
