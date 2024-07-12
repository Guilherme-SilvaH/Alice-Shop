import CardsContainer from "@/Components/CardsContainer/CardsContainer";
import Header from "@/Components/Header/Header";
import CardDetails from "@/Components/Pages/CardDetails";
import Home from "@/Components/Pages/Home";
import { Cards } from "@/Data/CardsData";
import { CardsProvider } from "@/Hooks/CardsProvider";
import { Route, Routes } from "react-router-dom";

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
