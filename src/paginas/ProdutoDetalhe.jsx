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
          <button className="btn-voltar" onClick={() => window.history.back()}>
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

  function adicionarAoCarrinho(produto) {

    const precoLimpo = Number(
      String(produto.preco)
        .replace("R$", "")
        .replace(/\./g, "")   // remove pontos de milhar
        .replace(",", ".")    // troca vírgula decimal
        .trim()
    );

    fetch("http://localhost/aromalimaback/rotas/carrinho.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuario_id: 1,
        produto_id: produto.id ?? produto.nome,
        nome_produto: produto.nome,
        preco: precoLimpo, // 🔥 AGORA É NÚMERO PURO
        imagem: produto.imagem,
      }),
    })
      .then(async (res) => {
        const text = await res.text();

        try {
          return JSON.parse(text);
        } catch (e) {
          throw new Error("Resposta não é JSON válido");
        }
      })
      .then((data) => {
        alert(data.mensagem || "Adicionado ao carrinho!");
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao adicionar ao carrinho");
      });
  }

  return (
    <div className="detalhe-page">
      <EscuraNavbar />

      <div className="voltar-container">
        <button className="btn-voltar" onClick={() => window.history.back()}>
          ← Voltar
        </button>
      </div>

      <section className="detalhe-container">
        <div className="detalhe-imagem">
          <div className="circulo-bg"></div>
          <img src={produto.imagem} alt={produto.nome} />
        </div>

        <div className="detalhe-info">
          <p className="mini">Aroma Lima • Produto Especial</p>

          <h1>{produto.nome}</h1>

          <p className="descricao">{produto.descricao}</p>

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

          <span className="preco">{produto.preco}</span>

          <div className="acoes">
            <button className="btn-comprar"
            onClick={() => adicionarAoCarrinho(produto)}>
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </section>

      <BotaoSubir />
      <Footer />
    </div>
  );
}