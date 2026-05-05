import React from "react";
import "../styles/global.css";
import "../styles/inicial.css";

import Navbar from "../componentes/navbar/Navbar";
import CardBebida from "../componentes/CardBebida";
import Footer from "../componentes/footer/Footer";


import logo_clara from "../assets/img/logo/logo_clara.png";
import cafeImg from "../assets/cafeinicial.png";
import caramelo from "../assets/caramelogelado.png";
import latte from "../assets/lattedourado.png";
import choco from "../assets/chocolima.png";
import preparo from "../assets/preparo.png";
import barista from "../assets/barista.png";


export default function Inicial() {
  return (
    <div>
      <Navbar />
      <section className="capa">
        <div>
          <p className="sub">Desde 1984</p>
          <h1>AROMA LIMA</h1>
          <p>Mais que café,uma experiência.</p>

          <button className="botao-padrao">
            Confira nossos cafés
          </button>
        </div>
        <img src={cafeImg} alt="Café" />
      </section>

      {/* BEBIDAS */}
      <section className="bebidas">
        <CardBebida nome="Caramelo Gelado" imagem={caramelo} />
        <CardBebida nome="Latte Dourado" imagem={latte} />
        <CardBebida nome="Choco Lima" imagem={choco} />

        <p className="texto-final">
          Deseja experimentar um café especial? Acesse agora.
        </p>
      </section>

      {/* WORKSHOPS */}
      <section className="workshops">
        <div className="workshop-conteudo">
          <div className="imgwork">
            <img src={barista} alt="Mão derramando café" className="imgworkprincipal" />
          </div>

          <div className="workshop-info">
            <div className="workshop-texto">
              <h2>Aprenda a arte do café</h2>
              <p>Participe dos nossos workshops e</p> 
              <p>descubra técnicas de preparo,</p>
              <p>moagem e extração.</p>
            </div>

            <a href="#" className="link-cursos">
              Confira mais cursos e workshops ↗
            </a>
          </div>

        </div>
      </section>

      <Footer />

    </div>
  );
}
