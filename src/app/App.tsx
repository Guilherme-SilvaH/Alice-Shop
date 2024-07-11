import { Routes, Route } from "react-router-dom";
import Home from "../components/Pages/Home";
import Header from "../components/Header/Header";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import CardDetails from "../components/Pages/CardDetails";
import { CardsProvider } from "../hooks/CardsContext";
import { cards } from "../data/cardsData";

function App() {
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
