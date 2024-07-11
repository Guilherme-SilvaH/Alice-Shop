import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  imageUrl: string;
  text: string;
  phoneNumber: string;
  productLink: string;
}

const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  text,
  phoneNumber,
  productLink,
}) => {
  return (
    <div className="Card">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} />
      <p>{text}</p>
      <p>Telefone: {phoneNumber}</p>
      <Link to={productLink}>Ver detalhes</Link>
    </div>
  );
};

export default Card;
