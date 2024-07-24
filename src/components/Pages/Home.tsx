import Carrosel from "../Carrosel/Carrosel.tsx";
import Send from "../Send/Send.tsx";
import CardsContainer from "../CardsContainer/CardsContainer.tsx";
import BannerInsta from "../BannerInsta/BannerInsta.tsx";

const Home = () => (
  <>
    <Carrosel />
    <Send />
    <CardsContainer />{" "}
    {/* Renderiza CardsContainer que acessará os dados dos cards do contexto */}
    <BannerInsta />
  </>
);

export default Home;
