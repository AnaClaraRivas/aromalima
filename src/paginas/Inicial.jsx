import React from "react";
import "../styles/global.css";
import "../styles/inicial.css";

import Navbar from "../componentes/navbar/Navbar";
import CardBebida from "../componentes/home/CardBebida";
import CardCurso from "../componentes/home/CardCurso";
import CardAssinatura from "../componentes/home/CardAssinatura";
import Footer from "../componentes/footer/Footer";


import logo_clara from "../assets/img/logo/logo_clara.png";
import cafeImg from "../assets/cafeinicial.png";
import caramelo from "../assets/caramelogelado.png";
import latte from "../assets/lattedourado.png";
import choco from "../assets/chocolima.png";
import preparo from "../assets/preparo.png";
import barista from "../assets/barista.png";
import iconecafe from "../assets/iconecafe.png";


export default function Inicial() {
  return (
    <div>
      <Navbar />
      <div className="tudo">
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
                <p>Participe dos nossos workshops e descubra técnicas de preparo,</p>
                <p>moagem e extração.</p>
              </div>
              <div className="flex gap-6 p-10 bg-[#f5f5f5] cards-cursos">
                <CardCurso
                  titulo="Preparação de café simples"
                  imagem={preparo}
                />
                <CardCurso
                  titulo="Formação de Barista"
                  imagem={preparo}
                />
              </div>
              <a href="#" className="link-cursos">
                Confira mais cursos e workshops ↗
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* ASSINATURA */}
      <section className="secao-assinatura">
        <div className="assinatura-container">
          <div className="assinatura-cabecalho">
            <div className="assinatura-icones">
              {/* Aqui você pode colocar a imagem das 3 xícaras do design */}
              <img className="imgiconecafe" src={iconecafe} alt="Ícones de café" />
            </div>
            <div className="assinatura-texto">
              <h2>Receba café fresco em casa</h2>
              <p>Escolha seu plano e tenha sempre novos sabores chegando até você.</p>
            </div>
          </div>
          <div className="assinatura-cards">
            <CardAssinatura
              plano="ASSINATURA PRATA"
              preco="37,00"
              descricao="Ideal para quem quer café bom no dia a dia"
              aoClicar={() => console.log("Prata")}
            />
            <CardAssinatura
              plano="ASSINATURA OURO"
              preco="79,00"
              descricao="Para quem quer viver o café de verdade"
              aoClicar={() => console.log("Ouro")}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
