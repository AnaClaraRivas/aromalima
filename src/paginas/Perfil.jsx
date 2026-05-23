import React, { useEffect, useState } from "react";

import "../styles/perfil.css";

import { Pencil, Camera } from "lucide-react";

import NavbarEscura from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";
import CardCurso from "../componentes/home/CardCurso";

import perfilPadrao from "../assets/perfil_padrao.png";

export default function Perfil() {

    const [inscricoes, setInscricoes] = useState([]);

    const [usuario, setUsuario] = useState(null);

    const [nome, setNome] = useState("");

    const [fotoPerfil, setFotoPerfil] = useState(null);

    const [editando, setEditando] = useState(false);



    useEffect(() => {

        const usuarioSalvo = JSON.parse(
            localStorage.getItem("usuario")
        );

        if (usuarioSalvo) {

            setUsuario(usuarioSalvo);

            setNome(usuarioSalvo.nome);
            buscarInscricoes(usuarioSalvo.id);

        }

    }, []);




    async function salvarPerfil() {

        try {

            const formData = new FormData();

            formData.append(
                "id",
                usuario.id
            );

            formData.append(
                "nome",
                nome
            );



            if (fotoPerfil) {

                formData.append(
                    "foto",
                    fotoPerfil
                );

            }



            const resposta = await fetch(
                "http://localhost/aromalimaback/rotas/atualizar_perfil.php",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const dados = await resposta.json();



            if (dados.status === "ok") {

                const novoUsuario = {

                    ...usuario,

                    nome: nome,

                    foto_perfil:
                        dados.foto
                            ? dados.foto
                            : usuario.foto_perfil

                };



                localStorage.setItem(
                    "usuario",
                    JSON.stringify(novoUsuario)
                );



                setUsuario(novoUsuario);

                setEditando(false);

            }

        } catch (erro) {

            console.log(erro);

        }

    }

    async function buscarInscricoes(idUsuario) {

    try {

        const resposta = await fetch(
            `http://localhost/aromalimaback/rotas/minhas_inscricoes.php?usuario_id=${idUsuario}`
        );

        const dados = await resposta.json();

        setInscricoes(dados);

    } catch (erro) {

        console.log(erro);

    }
}



    function trocarFoto(e) {

        const arquivo = e.target.files[0];

        if (!arquivo) return;

        setFotoPerfil(arquivo);

        setEditando(true);

    }




    function sairDaConta() {

        localStorage.removeItem("usuario");

        window.location.href = "/login";

    }



    if (!usuario) {

        return <h1>Carregando...</h1>;

    }



    return (

        <div>

            <NavbarEscura />



            <div className="pagina-perfil-aroma">

                <h1 className="titulo-pagina-perfil-aroma">
                    MINHA CONTA
                </h1>



                <div className="cartao-perfil-aroma">

                    <div className="topo-perfil-aroma">


                        {/* FOTO */}
                        <div className="container-foto-perfil-aroma">

                            <img
                                src={
                                    fotoPerfil
                                        ? URL.createObjectURL(fotoPerfil)
                                        : usuario.foto_perfil
                                            ? `http://localhost/aromalimaback/uploads/${usuario.foto_perfil}`
                                            : perfilPadrao
                                }
                                alt="Perfil"
                                className="foto-usuario-perfil-aroma"
                            />


                            <label className="botao-camera-perfil-aroma">

                                <Camera size={22} />

                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={trocarFoto}
                                    hidden
                                />

                            </label>

                        </div>



                        <div className="email-usuario-perfil-aroma">
                            {usuario.email}
                        </div>

                    </div>



                    <div className="area-dados-perfil-aroma">

                        <label className="label-dados-perfil-aroma">
                            Nome:
                        </label>


                        <div className="container-input-perfil-aroma">

                            <input
                                type="text"
                                value={nome}
                                disabled={!editando}
                                onChange={(e) => setNome(e.target.value)}
                                className="input-nome-perfil-aroma"
                            />


                            <button
                                className="botao-editar-perfil-aroma"
                                onClick={() => setEditando(true)}
                            >

                                <Pencil size={22} />

                            </button>

                        </div>



                        {editando && (

                            <button
                                className="botao-salvar-perfil-aroma"
                                onClick={salvarPerfil}
                            >
                                Salvar alterações
                            </button>

                        )}

                    </div>



                    <button
                        className="botao-trocar-senha-perfil-aroma"
                        onClick={() => window.location.href = "/esqueceu"}
                    >
                        Trocar senha
                    </button>


                    <button
                        className="botao-sair-conta-perfil-aroma"
                        onClick={sairDaConta}
                    >
                        SAIR DA CONTA
                    </button>

                </div>

                <div className="minhas-inscricoes">

                        <div className="topo-inscricoes">

                            <h2>Minhas inscrições</h2>

                        </div>

                        {inscricoes.length === 0 ? (

                            <p className="sem-inscricao">
                                Você ainda não se inscreveu em nenhum curso.
                            </p>

                        ) : (

                                <div className="cards-grid">

                                    {inscricoes.map((curso) => (

                                        <CardCurso
                                            key={curso.id}
                                            titulo={curso.curso_titulo}
                                            imagem={curso.curso_imagem}
                                            curso={{
                                                titulo: curso.curso_titulo,
                                                descricao: curso.curso_descricao,
                                                imagem: curso.curso_imagem,
                                                duracao: curso.duracao,
                                                horario: curso.horario,
                                                modalidade: curso.modalidade,
                                                local: curso.local
                                            }}
                                        />

                                    ))}

                                </div>
                        )}

                    </div>

            </div>

            <Footer />

        </div>

    );

}