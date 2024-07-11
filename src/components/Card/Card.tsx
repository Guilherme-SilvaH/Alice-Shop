import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

interface CardProps {
  title: string;
  imageUrl: string;
  text: string;
  productLink: string;
  phoneNumber: string;
}

const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  text,
  productLink,
  phoneNumber,
}) => {
  const handleButtonClick = () => {
    const message = `*${title}*\n${text}\n\n${window.location.origin}${productLink}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="Card">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title} width={"300vw"} />
      <p>{text}</p>
      {/* Renderiza o link para detalhes do produto */}
      <Link to={productLink}>Ver detalhes</Link>
      {/* Botão para ação de enviar mensagem */}
      <Button onClick={handleButtonClick} />
    </div>
  );
};

export default Card;
