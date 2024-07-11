import { Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home";
import Header from "../Components/Header/Header";
import CardsContainer from "../Components/CardsContainer/CardsContainer";
import CardDetails from "../Components/Pages/CardDetails";
import { Cards } from "../Data/CardsData";
import { CardsProvider } from "../Hooks/CardsProvider"; // Ajuste no caminho de importação

function App() {
  return (
    <div className="App">
      <Header />
      <CardsProvider cards={Cards}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<CardsContainer />} />
          {Cards.map((card) => (
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
