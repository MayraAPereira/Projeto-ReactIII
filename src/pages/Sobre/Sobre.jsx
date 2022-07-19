import Header from "../../components/Header/Header";
import image from "../../assets/Sobre-gamer.png";
import About from "../Sobre/About/About";
import Footer from "../../components/Footer/Footer";

function Sobre() {
  return (
    <>
      <Header image={image} description="ilustração de uma pessoa jogando">
        Sobre:
      </Header>
      <About />
      <Footer />
    </>
  );
}
export default Sobre;