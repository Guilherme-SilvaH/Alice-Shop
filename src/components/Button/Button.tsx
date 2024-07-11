import React from "react";

interface ButtonProps {
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className="btn-container" onClick={onClick}>
      Comprar
    </button>
  );
};

export default Button;
