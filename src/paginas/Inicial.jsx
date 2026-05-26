import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import "../styles/inicial.css";
import "../styles/DestaquesLoja.css";

import Navbar from "../componentes/navbar/Navbar";
import CardBebida from "../componentes/home/CardBebida";
import CardCurso from "../componentes/home/CardCurso";
import CardAssinatura from "../componentes/home/CardAssinatura";
import DestaquesLoja from "../componentes/home/DestaquesLoja";
import Footer from "../componentes/footer/Footer";
import BotaoSubir from "../componentes/BotaoSubir";

import cafeImg from "../assets/cafeinicial.png";
import caramelo from "../assets/caramelogelado.png";
import latte from "../assets/lattedourado.png";
import choco from "../assets/chocolima.png";
import preparo from "../assets/preparo.png";
import barista from "../assets/barista.png";
import barista2 from "../assets/barista2.jfif";
import iconecafe from "../assets/iconecafe.png";

export default function Inicial() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />

      <div className="tudo">

        {/* HERO */}
        <section className="capa">

          <div className="capa-texto">
            <p className="sub">DESDE 1984</p>

            <h1>
              AROMA <br />
              LIMA
            </h1>

            <p className="descricao-capa">
              Mais que café, uma experiência sensorial.
              Descubra sabores únicos, métodos artesanais
              e momentos especiais em cada xícara.
            </p>

            <div className="hero-botoes">

              <button
                className="botao-padrao"
                onClick={() => navigate("/loja")}
              >
                Confira nossos cafés
              </button>

              <button
                className="botao-secundario"
                onClick={() => navigate("/sobre")}
              >
                Conheça a história
              </button>

            </div>

            {/* MINI INFOS */}
            <div className="mini-info">
              <div>
                <h3>+40</h3>
                <p>Tipos de cafés</p>
              </div>

              <div>
                <h3>12k</h3>
                <p>Clientes felizes</p>
              </div>

              <div>
                <h3>100%</h3>
                <p>Grãos especiais</p>
              </div>
            </div>
          </div>

          <div className="hero-imagem">
            <img src={cafeImg} alt="Café Aroma Lima" />
          </div>

        </section>

        {/* BEBIDAS */}
        <section className="bebidas">

          <div className="titulo-bebidas">
            <h2>NOSSOS FAVORITOS</h2>
            <p>Conheça algumas das bebidas mais amadas da Aroma Lima.</p>
          </div>

          <div className="bebidas-grid">
            <CardBebida nome="Caramelo Gelado" imagem={caramelo} />
            <CardBebida nome="Latte Dourado" imagem={latte} />
            <CardBebida nome="Choco Lima" imagem={choco} />
          </div>

          <p className="texto-final">
            Deseja experimentar um café especial? Acesse agora.
          </p>

        </section>

        {/* BENEFÍCIOS */}
        <section className="beneficios">

          <div className="beneficio-card">
            <h3>Torra fresca</h3>
            <p>Cafés preparados com grãos selecionados e torrados cuidadosamente.</p>
          </div>

          <div className="beneficio-card">
            <h3>Entrega rápida</h3>
            <p>Receba seus cafés favoritos diretamente na sua casa.</p>
          </div>

          <div className="beneficio-card">
            <h3>Experiência premium</h3>
            <p>Sabores únicos e atendimento pensado para apaixonados por café.</p>
          </div>

        </section>

        {/* WORKSHOPS */}
        <section className="workshops">

          <div className="workshop-conteudo">

            <div className="imgwork">
              <img
                src={barista}
                alt="Mão derramando café"
                className="imgworkprincipal"
              />
            </div>

            <div className="workshop-info">

              <div className="workshop-texto">
                <span className="tag-workshop">
                  EXPERIÊNCIA AROMA LIMA
                </span>

                <h2>Aprenda a arte do café</h2>

                <p>
                  Participe dos nossos workshops e descubra técnicas
                  de preparo, moagem e extração.
                </p>
              </div>

              <div className="cards-cursos">

                <CardCurso
                  titulo="Preparação de café simples"
                  imagem={preparo}
                  curso={{
                    titulo: "Preparação de café simples",
                    descricao: "Aprenda os fundamentos do preparo do café e descubra técnicas incríveis.",
                    imagem: preparo,
                    duracao: "2 semanas",
                    horario: "18:00",
                    modalidade: "Presencial",
                    local: "Aroma Lima Cafeteria"
                  }}
                />

                <CardCurso
                  titulo="Formação de Barista"
                  imagem={barista2}
                  curso={{
                    titulo: "Formação de Barista",
                    descricao: "Desenvolva habilidades profissionais de barista.",
                    imagem: barista2,
                    duracao: "1 mês",
                    horario: "19:00",
                    modalidade: "Presencial",
                    local: "Aroma Lima Cafeteria"
                  }}
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
              <img
                className="imgiconecafe"
                src={iconecafe}
                alt="Ícones de café"
              />
            </div>

            <div className="assinatura-texto">
              <span className="tag-assinatura">
                ASSINATURA EXCLUSIVA
              </span>

              <h2>Receba café fresco em casa</h2>

              <p>
                Escolha seu plano e tenha sempre novos sabores
                chegando até você.
              </p>
            </div>

          </div>

          <div className="assinatura-cards">

            <CardAssinatura
              plano="ASSINATURA PRATA"
              preco="37,00"
              descricao="Ideal para quem quer café bom no dia a dia"
              aoClicar={() => navigate("assinaturas")}
            />

            <CardAssinatura
              plano="ASSINATURA OURO"
              preco="79,00"
              descricao="Para quem quer viver o café de verdade"
              aoClicar={() => navigate("assinaturas")}
            />

          </div>

        </div>

      </section>

      {/* LOJA */}
      <DestaquesLoja />

      <BotaoSubir />
      <Footer />
    </div>
  );
}