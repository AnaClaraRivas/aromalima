import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import EscuraNavbar from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";

import "../styles/detalheWorkshop.css";

export default function DetalheWorkshop() {

  const location = useLocation();
  const navigate = useNavigate();

  const workshop = location.state;
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!workshop) {
    return <h1>Workshop não encontrado</h1>;
  }

  async function fazerInscricao() {

    if (!usuario) {

      alert("Faça login para se inscrever");

      return;
    }

    try {

      const resposta = await fetch(
        "http://localhost/aromalimaback/rotas/inscrever.php",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({

            usuario_id: usuario.id,

            curso_titulo: workshop.titulo,

            curso_descricao: workshop.descricao,

            curso_imagem: workshop.imagem,

            duracao: workshop.data,

            horario: workshop.horario,

            modalidade: workshop.modalidade,

            local: workshop.local,

            tipo: "workshop"
          }),
        }
      );

      const dados = await resposta.json();

      if (dados.status === "ok") {

        alert("Inscrição realizada com sucesso!");

      }

      else if (dados.status === "existe") {

        alert("Você já está inscrito neste workshop!");

      }

    } catch (erro) {

      console.log(erro);

    }
  }

  return (

    <div className="pagina-detalhe-workshop">

      <EscuraNavbar />

      <div className="container-workshop">

        <button
          className="btn-voltar"
          onClick={() => navigate(-1)}
        >
          ← Voltar
        </button>

        <div className="workshop-conteudo">

          <div className="workshop-imagem">
            <img
              src={workshop.imagem}
              alt={workshop.titulo}
            />
          </div>

          <div className="workshop-info">

            <p className="mini">
              AROMA LIMA • WORKSHOP
            </p>

            <h1>{workshop.titulo}</h1>

            <p className="descricao">
              {workshop.descricao}
            </p>

            <div className="infos">

              <div>
                <strong>Data</strong>
                <p>{workshop.data}</p>
              </div>

              <div>
                <strong>Horário</strong>
                <p>{workshop.horario}</p>
              </div>

              <div>
                <strong>Local</strong>
                <p>{workshop.local}</p>
              </div>

            </div>

            <button
              className="btn-inscricao"
              onClick={fazerInscricao}
            >
              Fazer inscrição
            </button>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}