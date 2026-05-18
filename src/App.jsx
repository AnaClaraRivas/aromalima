import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from "./paginas/Inicial";
import Login from "./paginas/Login";
import Cadastro from "./paginas/Cadastro";
import Esqueceu from "./paginas/Esqueceu";
import Redefinir from "./paginas/Redefinir";
import Sobre from "./paginas/Sobre";
import Loja from "./paginas/Loja";
import Blog from "./paginas/Blog"; 
import Navbar from "./componentes/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueceu" element={<Esqueceu />} />
        <Route path="/redefinir" element={<Redefinir />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/blog" element={<Blog />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;