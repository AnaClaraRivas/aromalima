import React from "react";
import "../styles/global.css";
import "../styles/blogLeitura.css";

import NavbarEscura from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";
import BotaoSubir from "../componentes/BotaoSubir";

import capaBlog from "../assets/post_cafe_livro.png";
import decorFolha from "../assets/decor_folha.png";
import decorGraos from "../assets/decor_graos.png";

export default function BlogLeitura() {
  return (
    <div className="pagina-leitura-blog">
      <NavbarEscura />

      <header className="intro-blog">
        <img src={decorFolha} alt="" className="decoracao-esquerda" />
        <img src={decorGraos} alt="" className="decoracao-direita" />

        <div className="conteudo-blogs">
          <p className="categoria-blog">AROMA LIMA • DICAS</p>

          <h1>
            Como melhorar o sabor do seu café em casa
          </h1>

          <p className="subtitulo-blog">
            Pequenas mudanças no preparo podem transformar completamente
            a experiência do seu café diário.
          </p>
        </div>
      </header>
      

      <main className="conteudo-leitura-blog">

        <div className="imagem-capa-blog">
          <img src={capaBlog} alt="Café" />
        </div>

        <section className="texto-blog">


          <p className="paragrafo-destaque">
            O café faz parte da rotina de milhões de pessoas, mas muitas vezes
            pequenos detalhes acabam passando despercebidos durante o preparo.
            A qualidade da água, a moagem do grão e até mesmo a temperatura
            influenciam diretamente no sabor final da bebida.
          </p>

          <h2>A importância da moagem</h2>

          <p>
            A moagem correta é um dos fatores mais importantes para garantir
            um café equilibrado. Cafeteiras filtradas normalmente funcionam
            melhor com moagem média, enquanto métodos como prensa francesa
            pedem uma moagem mais grossa.
          </p>

          <p>
            Utilizar uma moagem inadequada pode deixar o café amargo ou fraco
            demais, comprometendo completamente a experiência.
          </p>

          <blockquote>
            “O segredo de um bom café está nos detalhes.”
          </blockquote>

          <h2>Escolha uma boa água</h2>

          <p>
            Como o café é composto majoritariamente por água, utilizar água
            filtrada pode melhorar muito o sabor da bebida. Águas com excesso
            de cloro ou minerais acabam alterando os aromas naturais do grão.
          </p>

          <div className="dica-especial">
            <h3>Dica Aroma Lima</h3>

            <p>
              Experimente aquecer a xícara antes de servir o café. Isso ajuda
              a manter a temperatura da bebida por mais tempo e valoriza ainda
              mais os aromas.
            </p>
          </div>

          <h2>Armazene corretamente os grãos</h2>

          <p>
            Evite deixar o café exposto à luz, calor ou umidade. O ideal é
            armazenar os grãos em potes fechados e em locais secos.
          </p>

          <p>
            Além disso, prefira comprar quantidades menores para manter sempre
            o frescor do café.
          </p>

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