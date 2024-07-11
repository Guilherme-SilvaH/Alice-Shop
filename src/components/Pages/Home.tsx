import Carrosel from "../Carrosel/Carrosel";
import Send from "../Send/Send";
import CardsContainer from "../CardsContainer/CardsContainer";

const Home = () => (
  <>
    <Carrosel />
    <Send />
    <CardsContainer />{" "}
    {/* Renderiza CardsContainer que acessará os dados dos cards do contexto */}
  </>
);

export default Home;
