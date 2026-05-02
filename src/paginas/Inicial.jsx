import React from "react";
import "../styles/global.css";
import "../styles/inicial.css";


import CardBebida from "../componentes/CardBebida";

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
        <img src="/src/assets/cafeinicial.png" />
      </section>

      {/* BEBIDAS */}
      <section className="bebidas">
        <CardBebida nome="Caramelo Gelado" imagem="/src/assets/caramelogelado.png" />
        <CardBebida nome="Latte Dourado" imagem="/src/assets/lattedourado.png" />
        <CardBebida nome="Choco Lima" imagem="/src/assets/chocolima.png" />
      </section>
    </div>
  );
}