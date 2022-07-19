import maravilhosa from "../../../assets/Mmaravilhosa.jpg";
import workshop from "../../../assets/workshop.jpg";
import todolist from "../../../assets/TodoList.png";
import portifolio from "../../../assets/diario.jpg";
import Card from "../PortifolioCard/PortifolioCard";
import "./infcards.css";

function InfCards() {
  return (
    <>
      <h2 className="infCards-title">
        Alguns projetos feitos durante a reprograma
      </h2>
      <div className="main">
        <div className="card-list">
          <Card
            title="M de Maravilhosa"
            image={maravilhosa}
            link="https://mdemaravilhosacassiaeller.netlify.app/"
          >
            Foi o meu primeiro projeto feito na reprograma, onde aprendi HTML,
            CSS e responsividade.
          </Card>
          <Card
            title="workshop"
            image={workshop}
            link="https://workshop2on17-mayra.netlify.app/"
          >
            Processo de seleção, tivemos que criar um site, básico com html e css.
          </Card>
          <Card
            title="Todo List"
            image={todolist}
          >
            Primeiros contatos fortes com JS.
          </Card>
          <Card
            title="Portifólio"
            image={portifolio}
            anchor="https://portifoliodamay.netlify.app/"
          >
            Segundo projeto em react. Nele utilizo a API do meu github, e mostro alguns projetos que 
            realizei.
          </Card>
        </div>
      </div>
    </>
  );
}

export default InfCards;