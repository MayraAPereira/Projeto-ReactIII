import "./repositoriocard.css";

const url = "https://api.github.com/users/mayraapereira/repos";

function RepositorioCard({ repo }) {
  return (
    <div className="repositorio-card">
      <h3 className="repositorioCard-title">{repo.name}</h3>
      <a href={repo.html_url} target="_blank" className="repositorioCard-icon"> 
      </a>
    </div>
  );
}

export default RepositorioCard;
