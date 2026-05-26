import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicial from "./paginas/Inicial";
import Login from "./paginas/Login";
import Cadastro from "./paginas/Cadastro";
import Esqueceu from "./paginas/Esqueceu";
import Redefinir from "./paginas/Redefinir";
import Sobre from "./paginas/Sobre";
import Loja from "./paginas/Loja";
import Blog from "./paginas/Blog";
import Cursos from "./paginas/Workshops";
import Assinaturas from "./paginas/Assinaturas";
import BlogLeitura from "./paginas/LeituraBlog";
import Navbar from "./componentes/navbar/Navbar";
import ProdutosCategoria from "./paginas/ProdutosCategoria";
import ProdutoDetalhe from "./paginas/ProdutoDetalhe";
import Contato from "./paginas/Contato";
import Perfil from "./paginas/Perfil";
import CafeBrasil from "./paginas/CafeBrasil";
import DetalheWorkshop from "./paginas/DetalheWorkshop";
import DetalheCurso from "./paginas/DetalheCurso";
import Carrinho from "./paginas/Carrinho";



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
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/assinaturas" element={<Assinaturas />} />
        <Route path="/blogleitura" element={<BlogLeitura />} />
        <Route path="/produtos/:categoria" element={<ProdutosCategoria />} />
        <Route path="/produto/:id" element={<ProdutoDetalhe />} />
        <Route path="contato" element={<Contato />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="cafeBrasil" element={<CafeBrasil />} />
        <Route path="detalheWorkshop" element={<DetalheWorkshop />} />
        <Route path="detalheCurso" element={<DetalheCurso />} />
        <Route path="/carrinho" element={<Carrinho />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;