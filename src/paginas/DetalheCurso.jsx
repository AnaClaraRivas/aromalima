import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import EscuraNavbar from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";

import "../styles/detalheCurso.css";

export default function DetalheCurso() {

  const location = useLocation();
  const navigate = useNavigate();

  const curso = location.state;
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  async function fazerInscricao() {

  if (!usuario) {

    alert("Faça login para se inscrever");

    return;
  }

  console.log(usuario);

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
              curso_titulo: curso.titulo,
              curso_descricao: curso.descricao,
              curso_imagem: curso.imagem,
              duracao: curso.duracao,
              horario: curso.horario,
              modalidade: curso.modalidade,
              local: curso.local
            }),
          }
        );

        const dados = await resposta.json();
        console.log(dados);
        

        if (dados.status === "ok") {

          alert("Inscrição realizada com sucesso!");

        }

        else if (dados.status === "existe") {

          alert("Você já está inscrito neste curso!");

        }

      } catch (erro) {

        console.log(erro);

      }
    }

  if (!curso) {
    return <h1>Curso não encontrado</h1>;
  }

  return (

    <div className="pagina-detalhe-curso">

      <EscuraNavbar />

      <div className="container-curso">

        <button
          className="btn-voltar"
          onClick={() => navigate(-1)}
        >
          ← Voltar
        </button>

        <div className="curso-conteudo">

          <div className="curso-imagem">

            <img
              src={curso.imagem}
              alt={curso.titulo}
            />

          </div>

          <div className="curso-info">

            <p className="mini">
              AROMA LIMA • CURSO
            </p>

            <h1>{curso.titulo}</h1>

            <p className="descricao">
              {curso.descricao}
            </p>

            <div className="infos">

              <div>
                <strong>Duração</strong>
                <p>{curso.duracao}</p>
              </div>

              <div>
                <strong>Horário</strong>
                <p>{curso.horario}</p>
              </div>

              <div>
                <strong>Modalidade</strong>
                <p>{curso.modalidade}</p>
              </div>

              <div>
                <strong>Local</strong>
                <p>{curso.local}</p>
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