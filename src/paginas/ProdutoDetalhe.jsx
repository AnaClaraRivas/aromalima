import React from "react";
import { useLocation } from "react-router-dom";

import EscuraNavbar from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";
import BotaoSubir from "../componentes/BotaoSubir";

import "../styles/produtoDetalhe.css";

export default function ProdutoDetalhe() {

  const location = useLocation();

  const produto = location.state;

  if (!produto) {
    return (
      <div>
        <EscuraNavbar />

        <div className="voltar-container">
          <button
            className="btn-voltar"
            onClick={() => window.history.back()}
          >
            ← Voltar
          </button>
        </div>

        <div className="produto-nao-encontrado">
          <h1>Produto não encontrado</h1>
        </div>

        <Footer />
      </div>
    );
  }

  return (

    <div className="detalhe-page">

      <EscuraNavbar />

      <div className="voltar-container">
          <button
            className="btn-voltar"
            onClick={() => window.history.back()}
          >
            ← Voltar
          </button>
        </div>

      <section className="detalhe-container">


        {/* img */}

        <div className="detalhe-imagem">

          <div className="circulo-bg"></div>

          <img
            src={produto.imagem}
            alt={produto.nome}
          />

        </div>

        {/* infos */}

        <div className="detalhe-info">

          <p className="mini">
            Aroma Lima • Produto Especial
          </p>

          <h1>
            {produto.nome}
          </h1>

          <p className="descricao">
            {produto.descricao}
          </p>

          {/* tags */}

          <div className="tags">

            {produto.categoria === "cafe" && (
              <>
                <span>Artesanal</span>
                <span>Café Especial</span>
                <span>Fresco</span>
              </>
            )}

            {produto.categoria === "acessorio" && (
              <>
                <span>Premium</span>
                <span>Durável</span>
                <span>Barista</span>
              </>
            )}

            {produto.categoria === "grao" && (
              <>
                <span>100% Arábica</span>
                <span>Torra Fresca</span>
                <span>Especial</span>
              </>
            )}

          </div>

          <span className="preco">
            {produto.preco}
          </span>

          <div className="acoes">

            <button className="btn-comprar">
              Finalizar Compra
            </button>

            <button className="btn-favorito">
              ♡ Favoritar
            </button>

          </div>

        </div>

      </section>

      {/* informações */}

      <section className="infos-produto">

        {/* cafes */}

        {produto.categoria === "cafe" && (
          <>
            <div className="info-card">
              <h3>Ingredientes</h3>
              <p>{produto.ingredientes}</p>
            </div>

            <div className="info-card">
              <h3>Origem</h3>
              <p>{produto.origem}</p>
            </div>

            <div className="info-card">
              <h3>Torra</h3>
              <p>{produto.torra }</p>
            </div>

            <div className="info-card">
              <h3>Notas Sensoriais</h3>
              <p>{produto.notas}</p>
            </div>
          </>
        )}

        {/* acessorios */}

        {produto.categoria === "acessorio" && (
          <>
            <div className="info-card">
              <h3>Material</h3>
              <p>{produto.material}</p>
            </div>

            <div className="info-card">
              <h3>Fabricante</h3>
              <p>{produto.fabricante}</p>
            </div>

            <div className="info-card">
              <h3>Origem</h3>
              <p>{produto.origem}</p>
            </div>

            <div className="info-card">
              <h3>Garantia</h3>
              <p>{produto.garantia}</p>
            </div>

            <div className="info-card">
              <h3>Limpeza</h3>
              <p>{produto.limpeza}</p>
            </div>
          </>
        )}

        {/* graos */}

        {produto.categoria === "grao" && (
          <>
            <div className="info-card">
              <h3>Origem</h3>
              <p>{produto.origem}</p>
            </div>

            <div className="info-card">
              <h3>Altitude</h3>
              <p>{produto.altitude}</p>
            </div>

            <div className="info-card">
              <h3>Torra</h3>
              <p>{produto.torra}</p>
            </div>

            <div className="info-card">
              <h3>Variedade</h3>
              <p>{produto.variedade}</p>
            </div>

            <div className="info-card">
              <h3>Perfil Sensorial</h3>
              <p>{produto.perfil}</p>
            </div>

            <div className="info-card">
              <h3>Peso</h3>
              <p>{produto.peso}</p>
            </div>
          </>
        )}

      </section>

      {/* apenas cafes */}

      {produto.categoria === "cafe" && (

        <>
          <section className="alergicos">

            <h2>
              Alerta para Alérgicos
            </h2>

            <p>
              {produto.alergicos}
            </p>

          </section>

          <section className="nutricional">

            <h2>
              Informações Nutricionais
            </h2>

            <div className="tabela">

              <div>
                <span>Calorias</span>
                <strong>220 kcal</strong>
              </div>

              <div>
                <span>Carboidratos</span>
                <strong>24g</strong>
              </div>

              <div>
                <span>Proteínas</span>
                <strong>6g</strong>
              </div>

              <div>
                <span>Cafeína</span>
                <strong>95mg</strong>
              </div>

            </div>

          </section>
        </>

      )}
      <BotaoSubir />
      <Footer />

    </div>
  );
}