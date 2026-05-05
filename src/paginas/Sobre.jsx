import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import "../styles/sobre.css";
import EscuraNavbar from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";
import imgSobre1 from "../assets/img/img_sobre1.png";
import imgSobre2 from "../assets/img/img_sobre2.png";

export default function Sobre() {
  const navigate = useNavigate();

  return (
    <div className="sobre-page">
      <EscuraNavbar />

      <section className="sobre-hero">

        <div className="sobre-content">
          <p className="desde">Desde 1984</p>
          <h1>AROMA LIMA</h1>
          <p className="descricao">
            Nossa marca nasce da paixão por grãos selecionados e do desejo de
            transformar cada xícara em um momento único.
          </p>
        </div>

        <div className="sobre-images-grid">
          <div className="image-card">
            <img src={imgSobre1} alt="Café e livro" />
          </div>
          <div className="image-card">
            <img src={imgSobre2} alt="Pessoas bebendo café" />
          </div>
        </div>
      </section>

      <section className="sobre-footer-space">
        <Footer/>
      </section>
    </div>
  );
}