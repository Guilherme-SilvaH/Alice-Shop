import React, { createContext, useContext } from "react";

// Define a interface para os dados do card
export interface CardData {
  id: number;
  title: string;
  imageUrl: string;
  text: string;
  phoneNumber: string;
  productLink: string;
}

// Criação do contexto
const CardsContext = createContext<CardData[]>([]);

// Provedor do contexto para envolver sua aplicação
interface CardsProviderProps {
  cards: CardData[];
  children?: React.ReactNode;
}

export const CardsProvider: React.FC<CardsProviderProps> = ({
  cards,
  children,
}) => <CardsContext.Provider value={cards}>{children}</CardsContext.Provider>;

// Hook personalizado para acessar o contexto dos cards
// eslint-disable-next-line react-refresh/only-export-components
export const useCards = () => useContext(CardsContext);
