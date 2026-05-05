import React from "react";
import "../styles/global.css";
import "../styles/loja.css";
import "../componentes/destaques.css"; 
import EscuraNavbar from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";
import CardDestaque from "../componentes/CardDestaque"; 
import imgGraos from "../assets/img/img_graos.png";
import imgCadastro from "../assets/img/img_cadastro.png";
import imgAcessorios from "../assets/img/img_acessorio.png";
import caramelo from "../assets/caramelogelado.png";
import latte from "../assets/lattedourado.png";
import choco from "../assets/chocolima.png";
import filtro from "../assets/img/filtro.png";
import coador from "../assets/img/coador.png";

export default function Loja() {
  return (
    <div className="loja-page">
      <EscuraNavbar />

      {/* parte vinho */}
      <section className="loja-hero">
        <div className="loja-content">
          <p className="desde">AROMA LIMA</p>
          <h1>NOSSA LOJA</h1>
          <p className="descricao">
            Na nossa loja, cada produto é escolhido para proporcionar uma experiência única.
          </p>
        </div>
      </section>

      {/* categorias */}
      <section className="loja-categorias">
        <div className="categorias-container">
          <div className="categoria-card pequeno">
            <h2>CAFÉS</h2>
            <img src={imgCadastro} alt="Cafés preparados" className="img-categoria" />
          </div>

          <div className="categoria-card pequeno">
            <h2>ACESSÓRIOS</h2>
            <img src={imgAcessorios} alt="Xícaras e acessórios" className="img-categoria xicara" />
          </div>

          <div className="categoria-card grande">
            <h2>GRÃOS</h2>
            <img src={imgGraos} alt="Grãos de café" className="img-categoria-graos" />
          </div>
        </div>
      </section>

      {/* destaques - cafe */}
      <section className="loja-destaques">
        <h2 className="titulo-secao"> Cafés destaques da Semana</h2>
        <div className="destaques-grid">
          <CardDestaque nome="Caramelo Gelado" imagem={caramelo} nota="4.9" />
          <CardDestaque nome="Latte Dourado" imagem={latte} nota="5.0" />
          <CardDestaque nome="Choco Lima" imagem={choco} nota="4.8" />
        </div>
      </section>

      {/* destaques - acessorios */}
      <section className="loja-destaques">
        <h2 className="titulo-secao"> Acessórios destaques da Semana</h2>
        <div className="destaques-grid">
          <CardDestaque nome="Coador de metal" imagem={coador} nota="4.9" />
          <CardDestaque nome="Xícara simples" imagem={imgAcessorios} nota="5.0" />
          <CardDestaque nome="Filtro de papel" imagem={filtro} nota="4.8" />
        </div>
      </section>

      <Footer />
    </div>
  );
}