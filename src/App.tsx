import CardsContainer from "../src/Components/CardsContainer/CardsContainer";
import Header from "../src/Components/Header/Header";
import CardDetails from "../src/Components/Pages/CardDetails";
import Home from "../src/Components/Pages/Home";
import { Cards } from "../src/Data/CardsData";
import { CardsProvider } from "../src/Hooks/CardsProvider";
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
