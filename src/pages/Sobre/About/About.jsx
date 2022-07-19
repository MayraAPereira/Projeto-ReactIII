import imagemPerfil from "../../../assets/May.jpg";

import './about.css'

function About() {
  return (
    <>
      <div className="about">
        <div className="about-image">
          <img
            className="profile-image"
            src={imagemPerfil}
            alt="Mayra Pereira"
          />
        </div>
        <div className="about-text">
          <h2>Olá, eu sou a May</h2>
          <p>
            Aluna da Reprograma, estudando para me tornar uma
            Desenvolvedora Front-End. Nas horas vagas adoro jogar um game!
          </p>
        </div>
      </div>
    </>
  );
}

export default About;