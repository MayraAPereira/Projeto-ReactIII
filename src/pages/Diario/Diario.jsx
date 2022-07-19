import Header from "../../components/Header/Header";
import image from "../../assets/Diaario.png";
import InformacaoDiario from "../Diario/InformacaoDiario/InformacaoDiario";
import Footer from "../../components/Footer/Footer";

function Diario() {
  return (
    <>
      <Header
        image={image}
        description="ilustração de uma muher ao lado de uma folha de caderno como um mural"
      />
      <InformacaoDiario />
      <Footer />
    </>
  );
}
export default Diario;