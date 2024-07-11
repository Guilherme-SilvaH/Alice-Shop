import { Routes, Route } from "react-router-dom";
import Home from "../components/Pages/Home";
import Header from "../components/Header/Header";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import CardDetails from "../components/Pages/CardDetails";
import { CardsProvider, CardData } from "../Hooks/CardsContext";

function App() {
  // Simulando dados dos cards
  const cards: CardData[] = [
    {
      id: 1,
      title: "Camiseta 1",
      imageUrl: "../../assets/LEGACY.png",
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

  return (
    <div className="App">
      <Header />
      <CardsProvider cards={cards}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<CardsContainer />} />
          {cards.map((card) => (
            <Route
              key={card.id}
              path={card.productLink}
              element={<CardDetails card={card} />}
            />
          ))}
        </Routes>
      </CardsProvider>
    </div>
  );
}

export default App;
