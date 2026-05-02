import React from "react";
import "../styles/global.css";
import "../styles/inicial.css";

import CardBebida from "../componentes/CardBebida";

import cafeImg from "../assets/cafeinicial.png";
import caramelo from "../assets/caramelogelado.png";
import latte from "../assets/lattedourado.png";
import choco from "../assets/chocolima.png";

export default function Inicial() {
  return (
    <div>
      <section className="capa">
        <div>
          <p className="sub">Desde 1984</p>
          <h1>AROMA LIMA</h1>
          <p>Mais que café, uma experiência.</p>

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
      </section>
    </div>
  );
}
