import React from "react";
import "../styles/global.css";
import "../styles/sobre.css";
import EscuraNavbar from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";

import imgSobre1 from "../assets/img/img_sobre1.png";
import imgSobre2 from "../assets/img/img_sobre2.png";
import imgSobre3 from "../assets/img/img_sobre3.png"; 

export default function Sobre() {
  return (
    <div className="sobre-page">
      <EscuraNavbar />

      {/* parte vinho */}
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

      {/* conteudo */}
      <section className="sobre-detalhes">
        <div className="container-textos">
          
          <div className="texto-box">
            <h2>Como surgimos?</h2>
            <div className="texto-flex">
              <p>
                A Aroma Lima nasceu da paixão de Pedro Lima por cafés especiais e do desejo de transformar o simples em algo único. Encantado pelos aromas, origens e processos, ele encontrou no café um propósito: criar uma marca que valoriza cada detalhe e entrega uma experiência verdadeira em cada xícara.
              </p>
              <p>
                Com o tempo, a Aroma Lima cresceu e levou essa essência para o digital. Hoje, mais do que vender café, a marca convida as pessoas a desacelerar e viver o momento, transformando o café em um pequeno ritual no dia a dia.
              </p>
            </div>
          </div>

          <div className="texto-box">
            <h2>Nossa Filosofia</h2>
            <p>
              Acreditamos que o café vai além de uma simples bebida — ele é um momento, uma pausa e uma experiência. Valorizamos o cuidado em cada etapa, respeitando o tempo do preparo e a essência de cada grão. Nossa filosofia é oferecer um café autêntico, feito com atenção aos detalhes e pensado para proporcionar sensações únicas em cada xícara.
            </p>
          </div>

          <div className="texto-box diferencial">
            <h2>Nosso Diferencial</h2>
            <div className="diferencial-content">
              <div className="diferencial-texto">
                <p>
                  Trabalhamos com cafés artesanais, selecionados de forma criteriosa para garantir qualidade e sabor em cada preparo. Cada grão passa por um processo cuidadoso, desde a escolha até a extração, preservando suas características naturais.
                </p>
                <p>
                  Nossa curadoria é feita com base em experiência e sensibilidade, buscando sempre cafés que surpreendam pelo aroma, equilíbrio e complexidade. Mais do que servir café, criamos experiências — momentos que conectam sabor, ambiente e sentimento.
                </p>
              </div>
              <div className="diferencial-imagem">
                <img src={imgSobre3} alt="Copo de café especial" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}