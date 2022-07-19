import { useEffect, useState } from "react";
import RepositorioCard from "../RepositorioCard/RepositorioCard";
import "./repositorios.css";

function Repositorios() {
  const [repositorios, setRepositories] = useState([]);

  const fetchRepositorios = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/babigoliveira/repos"
      );
      const repositorios = await response.json();
      setRepositories(repositorios);
    } catch (error) {
      console.error("Falha ao obter repositórios", error);
    }
  };

  useEffect(() => {
    fetchRepositorios();
  }, []);

  return (
    <>
      <h2 className="cards-title">Outros projetos do meu GitHub:</h2>
      <div className="main">
        <div className="repository-container">
          {repositorios.map((repo) => (
            <RepositorioCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Repositorios;