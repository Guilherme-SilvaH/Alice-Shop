import { Routes, Route } from "react-router-dom";
import Home from "../Components/Pages/Home.tsx";
import Header from "../Components/Header/Header.tsx";
import CardsContainer from "../Components/CardsContainer/CardsContainer.tsx";
import CardDetails from "../Components/Pages/CardDetails.tsx";
import { Cards } from "../Data/CardsData.tsx";
import { CardsProvider } from "@hooks/CardsContext.tsx";

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
