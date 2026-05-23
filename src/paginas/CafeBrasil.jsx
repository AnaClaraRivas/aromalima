import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import "../styles/blogLeitura.css";

import NavbarEscura from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";
import BotaoSubir from "../componentes/BotaoSubir";

import decorFolha from "../assets/decor_folha.png";
import decorGraos from "../assets/decor_graos.png";
import bandeiraBrasil from "../assets/bandeira_brasil.png";


export default function CafeBrasil() {
  return (
    <div className="pagina-leitura-blog">
      <NavbarEscura />

      <header className="intro-blog">
        <img src={decorFolha} alt="" className="decoracao-esquerda" />
        <img src={decorGraos} alt="" className="decoracao-direita" />

        <div className="conteudo-blogs">
          <p className="categoria-blog">AROMA LIMA • DICAS</p>

          <h1>
            Café Brasileiro 
          </h1>

          <p className="subtitulo-blog">
            Pequenas mudanças no preparo podem transformar completamente
            a experiência do seu café diário.
          </p>
        </div>
      </header>
      

      <main className="conteudo-leitura-blog">

        <div className="imagem-capa-blog">
          <img src={bandeiraBrasil} alt="" />
        </div>

        <section className="texto-blog">

            <h2>A História e a Cultura do Café no Brasil</h2>

          <p className="paragrafo-destaque">
            O café faz parte da identidade do Brasil. Presente no dia a dia de milhões de pessoas, ele vai muito além de uma simples bebida: representa tradição, encontros, trabalho e cultura.
          </p>

          <p>
            A história do café no país começou no século XVIII, quando os primeiros grãos chegaram ao território brasileiro. Com o clima favorável e o solo fértil, o cultivo se expandiu rapidamente, tornando o Brasil um dos maiores produtores de café do mundo.

            As principais regiões produtoras estão em Minas Gerais, São Paulo, Espírito Santo e Bahia. Cada região possui características únicas que influenciam o sabor, o aroma e a intensidade do café, criando experiências diferentes em cada xícara.
          </p>

          <h2>Características do Café Brasileiro</h2>

          <p>
            O café brasileiro é conhecido mundialmente pela sua qualidade, diversidade de sabores e produção em larga escala. O clima tropical, o solo fértil e a variedade de regiões produtoras fazem do Brasil um dos maiores produtores e exportadores de café do mundo.
          </p>

            <p>
                Os cafés do Brasil costumam apresentar sabor equilibrado e suave, baixa acidez em muitos grãos, aroma intenso e marcante, além de notas sensoriais de chocolate, castanhas, caramelo e frutas, com corpo encorpado e textura cremosa.
            </p>

          <p>
            Cada região produtora oferece características diferentes. Minas Gerais, por exemplo, é famosa pelos cafés doces e equilibrados, enquanto o Espírito Santo se destaca pela produção de café robusta.
          </p>

          <blockquote>
            “O café no Brasil é mais do que uma bebida — é tradição, encontro e parte da nossa história em cada xícara.”
          </blockquote>

          <h2>Café brasileiro na Aroma Lima</h2>

          <p>
            Na Aroma Lima, celebramos a essência do café brasileiro com grãos selecionados, aromas marcantes e sabores que transformam cada xícara em uma experiência única.
          </p>

          <div className="dica-especial">
            <h3>Valorizamos a cultura do café brasileiro em cada detalhe.</h3>

            <p>
                Trabalhamos com grãos selecionados, sabores autênticos e métodos que respeitam a tradição e a qualidade do nosso país. Mais do que servir café, buscamos proporcionar experiências acolhedoras, aromas marcantes e momentos especiais que conectam pessoas através da paixão pelo verdadeiro café brasileiro
            </p>
          </div>

          <div className="voltar-container">
              <button
                className="btn-voltar"
                onClick={() => window.history.back()}
              >
                ← Voltar
              </button>
          </div>

        </section>
      </main>

      <BotaoSubir />
      <Footer />
    </div>
  );
}