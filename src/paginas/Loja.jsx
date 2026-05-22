import React from "react";
import { Link } from "react-router-dom";

import "../styles/global.css";
import "../styles/loja.css";
import "../componentes/destaques.css";

import EscuraNavbar from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";
import BotaoSubir from "../componentes/BotaoSubir";
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

      <section className="sobre-hero">

        <div className="sobre-content">

          <p className="desde">
            Desde 1984
          </p>

          <h1>
            NOSSA LOJA
          </h1>
          
        </div>

      </section>

      {/* categorias */}

      <section className="loja-categorias">

        <div className="categorias-container">

          {/* cafes */}

          <div className="categoria-card pequeno">

            <h2>
              CAFÉS
            </h2>

            <Link to="/produtos/cafes">

              <button className="btn-comprar">
                Ver produtos
              </button>

            </Link>

            <img
              src={imgCadastro}
              alt="Cafés preparados"
              className="img-categoria"
            />

          </div>

          {/* acessorios */}

          <div className="categoria-card pequeno">

            <h2>
              ACESSÓRIOS
            </h2>

            <Link to="/produtos/acessorios">

              <button className="btn-comprar">
                Ver produtos
              </button>

            </Link>

            <img
              src={imgAcessorios}
              alt="Xícaras e acessórios"
              className="img-categoria xicara"
            />

          </div>

          {/* graos */}

          <div className="categoria-card grande">

            <div>

              <h2>
                GRÃOS
              </h2>

              <Link to="/produtos/graos">

                <button className="btn-comprar">
                  Ver produtos
                </button>

              </Link>

            </div>

            <img
              src={imgGraos}
              alt="Grãos de café"
              className="img-categoria-graos"
            />

          </div>

        </div>

      </section>

      {/* destaques cafes */}

      <section className="loja-destaques">

        <h2 className="titulo-secao">
          Cafés destaques da Semana
        </h2>

        <div className="destaques-grid">

          {/* caramelo */}

          <Link
            to="/produto/1"
            state={{
              id: 1,
              categoria: "cafe",

              nome: "Caramelo Gelado",

              preco: "R$ 18,90",

              imagem: caramelo,

              descricao:
                "Café gelado cremoso com calda artesanal de caramelo.",

              ingredientes:
                "Café arábica especial, leite integral, chantilly artesanal e calda premium.",

              origem:
                "Serra da Mantiqueira • Minas Gerais",

              intensidade:
                "Média",

              notas:
                "Caramelo, chocolate e baunilha",

              alergicos:
                "Contém leite e derivados."
            }}
          >

            <CardDestaque
              nome="Caramelo Gelado"
              imagem={caramelo}
              nota="4.9"
            />

          </Link>

          {/* latte */}

          <Link
            to="/produto/2"
            state={{
              id: 2,
              categoria: "cafe",

              nome: "Latte Dourado",

              preco: "R$ 16,90",

              imagem: latte,

              descricao:
                "Latte suave e sofisticado com espuma cremosa.",

              ingredientes:
                "Espresso especial, leite vaporizado e creme dourado.",

              origem:
                "Sul de Minas • Brasil",

              intensidade:
                "Suave",

              notas:
                "Mel, baunilha e chocolate branco",

              alergicos:
                "Contém leite e derivados."
            }}
          >

            <CardDestaque
              nome="Latte Dourado"
              imagem={latte}
              nota="5.0"
            />

          </Link>

          {/* choco */}

          <Link
            to="/produto/3"
            state={{
              id: 3,
              categoria: "cafe",

              nome: "Choco Lima",

              preco: "R$ 19,90",

              imagem: choco,

              descricao:
                "Chocolate quente intenso com toque especial da casa.",

              ingredientes:
                "Chocolate premium, leite integral, chantilly e café especial.",

              origem:
                "Blend Aroma Lima",

              intensidade:
                "Alta",

              notas:
                "Chocolate amargo e creme de leite",

              alergicos:
                "Contém leite e derivados."
            }}
          >

            <CardDestaque
              nome="Choco Lima"
              imagem={choco}
              nota="4.8"
            />

          </Link>

        </div>

      </section>

      {/* destaques acessorios */}

      <section className="loja-destaques">

        <h2 className="titulo-secao">
          Acessórios destaques da Semana
        </h2>

        <div className="destaques-grid">

          {/* coador */}

          <Link
            to="/produto/4"
            state={{
              id: 4,
              categoria: "acessorio",

              nome: "Coador de Metal",

              preco: "R$ 39,90",

              imagem: coador,

              descricao:
                "Coador premium reutilizável para cafés artesanais.",

              material:
                "Aço inoxidável 304",

              fabricante:
                "Aroma Lima Studio",

              origem:
                "Curitiba • Paraná",

              garantia:
                "12 meses",

              limpeza:
                "Lavagem manual recomendada."
            }}
          >

            <CardDestaque
              nome="Coador de metal"
              imagem={coador}
              nota="4.9"
            />

          </Link>

          {/* xicara */}

          <Link
            to="/produto/5"
            state={{
              id: 5,
              categoria: "acessorio",

              nome: "Xícara Simples",

              preco: "R$ 24,90",

              imagem: imgAcessorios,

              descricao:
                "Xícara minimalista elegante.",

              material:
                "Cerâmica premium",

              fabricante:
                "Aroma Lima Ceramics",

              origem:
                "Porto Alegre • Brasil",

              garantia:
                "6 meses",

              limpeza:
                "Pode ir ao micro-ondas e lava-louças."
            }}
          >

            <CardDestaque
              nome="Xícara simples"
              imagem={imgAcessorios}
              nota="5.0"
            />

          </Link>

          {/* filtro */}

          <Link
            to="/produto/6"
            state={{
              id: 6,
              categoria: "acessorio",

              nome: "Filtro de Papel",

              preco: "R$ 12,90",

              imagem: filtro,

              descricao:
                "Filtros especiais para cafés artesanais.",

              material:
                "Papel filtrante premium",

              fabricante:
                "Aroma Lima Studio",

              origem:
                "São Paulo • Brasil",

              garantia:
                "Produto descartável",

              limpeza:
                "Uso único."
            }}
          >

            <CardDestaque
              nome="Filtro de papel"
              imagem={filtro}
              nota="4.8"
            />

          </Link>

        </div>

      </section>

      <BotaoSubir />
      <Footer />

    </div>

  );
}