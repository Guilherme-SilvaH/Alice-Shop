import React from "react";
import { useParams } from "react-router-dom";

interface CardProps {
  id: number;
  title: string;
  imageUrl: string;
  text: string;
  phoneNumber: string;
  productLink: string;
}

const CardDetails: React.FC<{ card: CardProps }> = ({ card }) => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="CardDetails">
      <h2>{card.title}</h2>
      <img src={card.imageUrl} alt={card.title} />
      <p>{card.text}</p>
      <p>Telefone: {card.phoneNumber}</p>
      <p>ID do Produto: {id}</p>
      <p>Link do Produto: {card.productLink}</p>
    </div>
  );
};

export default CardDetails;
