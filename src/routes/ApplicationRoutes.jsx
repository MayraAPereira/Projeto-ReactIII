import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "../pages/Sobre/Sobre";
import Diario from "../pages/Diario/Diario.jsx";
import Portifolio from "../pages/Portifolio/Portifolio";
import Comentarios from "../pages/Comentarios/Comentarios";
import Contatos from "../pages/Contatos/Contatos";
import Menu from "../components/Menu/Menu";

function ApplicationRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Sobre />} />
        <Route path="diario" element={<Diario />} />
        <Route path="portifolio" element={<Portifolio />} />
        <Route path="comentarios" element={<Comentarios />} />
        <Route path="contatos" element={<Contatos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRoutes;