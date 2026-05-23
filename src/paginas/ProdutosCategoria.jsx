import React from "react";
import { useParams, Link } from "react-router-dom";

import EscuraNavbar from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";
import BotaoSubir from "../componentes/BotaoSubir";

import "../styles/produtosCategoria.css";

import caramelo from "../assets/caramelogelado.png";
import latte from "../assets/lattedourado.png";
import choco from "../assets/chocolima.png";

import filtro from "../assets/img/filtro.png";
import coador from "../assets/img/coador.png";
import imgAcessorios from "../assets/img/img_acessorio.png";

import imgGraos from "../assets/img/img_graos.png";

const produtos = {

  cafes: [

    {
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
        "Aroma Lima Cafeteria - SP",

      torra:
        "Média",

      notas:
        "Caramelo, chocolate e baunilha",

      alergicos:
        "Contém leite e derivados."
    },

    {
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
        "Aroma Lima Cafeteria - SP",

      torra:
        "Média Escura",

      notas:
        "Mel, baunilha e chocolate branco",

      alergicos:
        "Contém leite."
    },

    {
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
        "Aroma Lima Cafeteria - SP",

      torra:
        "Média Escura",

      notas:
        "Chocolate amargo e creme de leite",

      alergicos:
        "Contém leite e derivados."
    }

  ],

  acessorios: [

    {
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
        "São Paulo • Brasil",

      garantia:
        "12 meses",

      limpeza:
        "Lavagem manual recomendada."
    },

    {
      id: 5,
      categoria: "acessorio",

      nome: "Filtro de Papel",

      preco: "R$ 12,90",

      imagem: filtro,

      descricao:
        "Filtros especiais para extração suave e equilibrada.",

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
    },

    {
      id: 6,
      categoria: "acessorio",

      nome: "Xícara Simples",

      preco: "R$ 24,90",

      imagem: imgAcessorios,

      descricao:
        "Xícara minimalista elegante para cafés especiais.",

      material:
        "Cerâmica premium",

      fabricante:
        "Aroma Lima Studio",

      origem:
        "São Paulo • Brasil",

      garantia:
        "6 meses",

      limpeza:
        "Pode ir ao micro-ondas e lava-louças."
    }

  ],

  graos: [

    {
      id: 7,
      categoria: "grao",

      nome: "Grãos Tradicionais",

      preco: "R$ 34,90",

      imagem: imgGraos,

      descricao:
        "Blend tradicional encorpado e equilibrado.",

      origem:
        "Sul de Minas • Brasil",

      altitude:
        "1200m",

      torra:
        "Média",

      variedade:
        "Arábica Bourbon",

      perfil:
        "Chocolate, castanhas e mel",

      peso:
        "500g"
    },

    {
      id: 8,
      categoria: "grao",

      nome: "Grãos Premium",

      preco: "R$ 49,90",

      imagem: imgGraos,

      descricao:
        "Grãos especiais selecionados manualmente.",

      origem:
        "Sul de Minas • Brasil",

      altitude:
        "1100m",

      torra:
        "Média Clara",

      variedade:
        "Catuaí Vermelho",

      perfil:
        "Frutas vermelhas e caramelo",

      peso:
        "500g"
    },

    {
      id: 9,
      categoria: "grao",

      nome: "Blend Especial",

      preco: "R$ 44,90",

      imagem: imgGraos,

      descricao:
        "Mistura exclusiva Aroma Lima.",

      origem:
        "Sul de Minas • Brasil",

      altitude:
        "1300m",

      torra:
        "Média Escura",

      variedade:
        "Arábica Especial",

      perfil:
        "Chocolate intenso e melaço",

      peso:
        "1kg"
    }

  ]
};

export default function ProdutosCategoria() {

  const { categoria } = useParams();

  const listaProdutos = produtos[categoria] || [];

  return (

    <div className="produtos-page">

      <EscuraNavbar />

      <section className="produtos-hero">

        <div className="hero-content">

          <p className="subtitulo">
            Aroma Lima
          </p>

          <h1>
            {categoria.toUpperCase()}
          </h1>

          <p className="hero-descricao">
            Descubra sabores e produtos únicos feitos para transformar sua experiência.
          </p>

        </div>

      </section>

      <div className="voltar-container">
          <button
            className="btn-voltar"
            onClick={() => window.history.back()}
          >
            ← Voltar
          </button>
      </div>


      <section className="produtos-grid">

        {listaProdutos.map((produto) => (

          <div className="produto-card" key={produto.id}>

            <div className="produto-imagem">
              <img
                src={produto.imagem}
                alt={produto.nome}
              />
            </div>

            <div className="produto-info">

              <h2>
                {produto.nome}
              </h2>

              <p className="descricao-produto">
                {produto.descricao}
              </p>

              <span className="preco">
                {produto.preco}
              </span>

              <Link
                to={`/produto/${produto.id}`}
                state={produto}
              >
                <button>
                  Comprar
                </button>
              </Link>

            </div>

          </div>

        ))}

      </section>
      <BotaoSubir />
      <Footer />

    </div>
  );
}