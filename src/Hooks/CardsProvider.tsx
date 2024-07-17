/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext } from "react";
import { CardData } from "src/Interface/ICardData.tsx";

// Define a interface para os dados do card

// Criação do contexto
export const CardsContext = createContext<CardData[]>([]);

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
// eslint-disable-next-line react-hooks/rules-of-hooks
export function useCards() {
  return useContext(CardsContext);
}
