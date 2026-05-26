import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/global.css";
import "../styles/blog.css";

import NavbarEscura from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";
import BotaoSubir from "../componentes/BotaoSubir";

import decorFolha from "../assets/decor_folha.png";
import decorGraos from "../assets/decor_graos.png";
import postImg from "../assets/post_cafe_livro.png";
import postImg2 from "../assets/post_cafe_livro3.png";
import postImg3 from "../assets/post_cafe_livro2.png";
import bandeiraBrasil from "../assets/bandeira_brasil.png";
import bandeiraFranca from "../assets/bandeira_franca.png";
import bandeiraCanada from "../assets/bandeira_canada.png";

const postsPrincipais = [
  {
    id: 1,
    titulo: "Como melhorar o sabor do seu café em casa",
    descricao:
      "Pequenas mudanças no preparo podem transformar totalmente sua experiência. Descubra técnicas simples para deixar seu café mais equilibrado, aromático e intenso.",
    imagem: postImg2,
  },

  {
    id: 2,
    titulo: "Os cafés mais raros e caros do mundo",
    descricao:
      "Conheça variedades exclusivas apreciadas por especialistas e descubra o que torna alguns cafés tão especiais, sofisticados e disputados internacionalmente.",
    imagem: postImg,
  },

  {
    id: 3,
    titulo: "Métodos de preparo: qual combina com você?",
    descricao:
      "French Press, V60, Espresso ou Aeropress? Entenda as diferenças entre os principais métodos de preparo e encontre o ideal para o seu paladar.",
    imagem: postImg3,
  },
];

const postsPaises = [
  {
    id: 1,
    titulo: "CAFÉ BRASILEIRO",
    imagem: bandeiraBrasil,
  },
  {
    id: 2,
    titulo: "CAFÉ FRANCÊS",
    imagem: bandeiraFranca,
  },
  {
    id: 3,
    titulo: "CAFÉ CANADENSE",
    imagem: bandeiraCanada,
  },
];

export default function Blog() {
  const navigate = useNavigate();

  return (
    <div className="pagina-blog">
      <NavbarEscura />

      <header className="cabecalho-blog">
        <img src={decorFolha} alt="" className="decoracao-esquerda" />
        <img src={decorGraos} alt="" className="decoracao-direita" />

        <div className="conteudo-cabecalho-blog">
          <p className="desde">AROMA LIMA</p>

          <h1 className="titulo-blog">BLOG</h1>

          <p className="descricao-blog">
            Conteúdos, dicas e curiosidades para você aprofundar seus <br />
            conhecimentos e aproveitar ainda mais o seu café.
          </p>
        </div>
      </header>

      <main className="conteudo-blog">
        <section className="secao-posts-principais">
          {postsPrincipais.map((post) => (
            <div key={post.id} className="card-post">
              <div className="lado-texto-post">
                <h2>{post.titulo}</h2>

                <p>{post.descricao}</p>

                <button
                  className="botao-ver-conteudo"
                  onClick={() => navigate("/blogleitura")}
                >
                  Ver conteúdo <span>➔</span>
                </button>
              </div>

              <div className="lado-imagem-post">
                <img src={post.imagem} alt={post.titulo} />
              </div>
            </div>
          ))}
        </section>

        <section className="secao-cafe-mundo">
          <div className="titulo-secaoo">
            <h2>CAFÉ AO REDOR DO MUNDO</h2>
          </div>

          <div className="grade-paises">
            {postsPaises.map((pais) => (
              <div key={pais.id} className="card-pais">
                <div className="container-bandeira">
                  <img src={pais.imagem} alt={pais.titulo} />
                </div>

                <h3>{pais.titulo}</h3>

                <button
                  className="botao-ver-conteudo"
                  onClick={() => navigate("/cafeBrasil")}
                >
                  Ver conteúdo <span>➔</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <BotaoSubir />
      <Footer />
    </div>
  );
}