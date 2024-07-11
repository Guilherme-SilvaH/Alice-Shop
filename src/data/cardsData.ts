import { CardData } from "../hooks/CardsContext";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import img from "../assets/LEGACY.png"

export const cards: CardData[] = [
  {
    id: 1,
    title: "Camiseta 1",
    imageUrl: 'https://i.postimg.cc/Hnj6pJgC/LEGACY.png',
    text: "Exemplo de texto para a Camiseta 1",
    phoneNumber: "19995681352",
    productLink: "/card/1",
  },
  {
    id: 2,
    title: "Camiseta 2",
    imageUrl: "../../assets/LEGACY.png",
    text: "Exemplo de texto para a Camiseta 2",
    phoneNumber: "19995681352",
    productLink: "/card/2",
  },
  {
    id: 3,
    title: "Camiseta 3",
    imageUrl: "../../assets/LEGACY.png",
    text: "Exemplo de texto para a Camiseta 3",
    phoneNumber: "19995681352",
    productLink: "/card/3",
  },
];