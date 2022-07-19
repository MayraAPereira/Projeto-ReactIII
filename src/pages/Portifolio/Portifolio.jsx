import Header from "../../components/Header/Header";
import image from "../../assets/portifolio.png";
import InformacaoCard from "../Portifolio/InformacaoCards/InfCards";
import Repositorios from "../Portifolio/Repositorios/Repositorios";
import Footer from "../../components/Footer/Footer";

function Portifolio() {
  return (
    <>
      <Header
        image={image}
        description="ilustração de uma pagina de internete com oculos escuro"
      >
        Portifólio:
      </Header>
      <InformacaoCard />
      <Repositorios />
      <Footer />
    </>
  );
}
export default Portifolio;