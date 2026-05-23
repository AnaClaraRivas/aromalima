import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import EscuraNavbar from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";

import "../styles/detalheWorkshop.css";

export default function DetalheWorkshop() {

  const location = useLocation();
  const navigate = useNavigate();

  const workshop = location.state;

  if (!workshop) {
    return <h1>Workshop não encontrado</h1>;
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

            <button className="btn-inscricao">
              Fazer inscrição
            </button>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}