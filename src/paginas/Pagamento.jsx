import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EscuraNavbar from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";
import BotaoSubir from "../componentes/BotaoSubir";

import "../styles/pagamento.css";

import imgpix from "../assets/imgpix.png";

export default function Pagamento() {

    const navigate = useNavigate();

    const [itens, setItens] = useState([]);

    const [metodoPagamento, setMetodoPagamento] = useState("Cartão");

    const [nomeCartao, setNomeCartao] = useState("");
    const [numeroCartao, setNumeroCartao] = useState("");
    const [validade, setValidade] = useState("");
    const [cvv, setCvv] = useState("");

    const [endereco, setEndereco] = useState("");


    const API = "http://localhost/aromalimaback/rotas/carrinho.php";

    useEffect(() => {

        fetch(`${API}?usuario_id=${usuarioId}`)
            .then((res) => res.json())
            .then((data) => setItens(data));

    }, []);

    const total = itens.reduce((acc, item) => {

        const preco = Number(
            String(item.preco)
                .replace(",", ".")
        );

        return acc + preco * item.quantidade;

    }, 0);

    const usuario = JSON.parse(
        localStorage.getItem("usuario")
    );

    const usuarioId = usuario?.id;
    console.log("ITENS:", itens);
    console.log("TOTAL:", total);

    async function finalizarCompra() {

        console.log("TOTAL ENVIADO:", total);

        try {

            const resposta = await fetch(
                "http://localhost/aromalimaback/rotas/finalizar_pedido.php",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        usuario_id: usuarioId,
                        total: Number(total),
                        metodo_pagamento: metodoPagamento,
                        endereco: endereco
                    })
                }
            );

            const dados = await resposta.json();

            console.log(dados);

            if (dados.status === "ok") {

                navigate("/pagamentofinal");

            } else {

                alert(dados.mensagem);

            }

        } catch (erro) {

            console.log(erro);

        }
    }


    return (

        <div className="pagamento">

            <EscuraNavbar />

            <section className="pagamento-tudo">

                <div className="pagamento-tudo-conteudo">

                    <h1>PAGAMENTO</h1>

                    <p>
                        Finalize sua compra
                    </p>

                </div>

            </section>

            <section className="pagamento-container">

                <div className="formulario-pagamento">

                    <h2>Pagamento</h2>

                    <div className="metodos">

                        <button
                            className={
                                metodoPagamento === "Cartão"
                                    ? "ativo"
                                    : ""
                            }
                            onClick={() =>
                                setMetodoPagamento("Cartão")
                            }
                        >
                            Cartão
                        </button>

                        <button
                            className={
                                metodoPagamento === "PIX"
                                    ? "ativo"
                                    : ""
                            }
                            onClick={() =>
                                setMetodoPagamento("PIX")
                            }
                        >
                            PIX
                        </button>

                        <button
                            className={
                                metodoPagamento === "Dinheiro"
                                    ? "ativo"
                                    : ""
                            }
                            onClick={() =>
                                setMetodoPagamento("Dinheiro")
                            }
                        >
                            Dinheiro
                        </button>

                    </div>

                    {metodoPagamento === "Cartão" && (

                        <>


                            <div className="cartao-visual">

                                <span className="logo-cartao">
                                    AROMA LIMA
                                </span>

                                <h3>
                                    {
                                        numeroCartao ||
                                        "**** **** **** ****"
                                    }
                                </h3>

                                <div className="dados-cartao">

                                    <span>
                                        {
                                            nomeCartao ||
                                            "NOME"
                                        }
                                    </span>

                                    <span>
                                        {validade || "00/00"}
                                    </span>

                                </div>

                            </div>

                            <div className="pagamento-input-group">

                                <label>Nome ilustrativo</label>

                                <input
                                    type="text"
                                    autoComplete="off"
                                    name="fake-name"
                                    value={nomeCartao}
                                    onChange={(e) =>
                                        setNomeCartao(
                                            e.target.value.toUpperCase()
                                        )
                                    }
                                    placeholder="Seu nome"
                                />

                            </div>

                            <div className="pagamento-input-group">

                                <label>Código ilustrativo</label>

                                <input
                                    type="text"
                                    placeholder="**** **** **** ****"
                                    autoComplete="off"
                                    name="fake-card"

                                    value={numeroCartao}

                                    onChange={(e) => {

                                        let valor = e.target.value
                                            .replace(/\D/g, "")
                                            .slice(0, 16);

                                        valor = valor.replace(
                                            /(\d{4})(?=\d)/g,
                                            "$1 "
                                        );

                                        setNumeroCartao(valor);

                                    }}
                                />

                            </div>

                            <div className="linha-inputs">

                                <div className="pagamento-input-group">

                                    <label>Identificação</label>

                                    <input
                                        type="text"
                                        placeholder="00/00"
                                        autoComplete="off"
                                        name="fake-date"

                                        value={validade}

                                        onChange={(e) => {

                                            let valor = e.target.value
                                                .replace(/\D/g, "")
                                                .slice(0, 4);

                                            if (valor.length > 2) {

                                                valor =
                                                    valor.slice(0, 2) +
                                                    "/" +
                                                    valor.slice(2);

                                            }

                                            setValidade(valor);

                                        }}
                                    />

                                </div>

                                <div className="pagamento-input-group">

                                    <label>Código</label>

                                    <input
                                        type="password"
                                        placeholder="***"
                                        autoComplete="off"
                                        name="fake-security"

                                        value={cvv}

                                        onChange={(e) => {

                                            const valor =
                                                e.target.value
                                                    .replace(/\D/g, "")
                                                    .slice(0, 3);

                                            setCvv(valor);

                                        }}
                                    />

                                </div>

                            </div>

                        </>

                    )}

                    {metodoPagamento === "PIX" && (


                        <div className="pix-box">

                            <h3>Pagamento via PIX</h3>

                            <p>
                                Escaneie o QR Code para finalizar
                                o pedido
                            </p>

                            <img
                                src={imgpix}
                                alt="QR Code PIX"
                                className="img-pix"
                            />

                        </div>


                    )}

                    {metodoPagamento === "Dinheiro" && (

                        <div className="pix-box">

                            <h3>Pagamento em dinheiro</h3>

                            <p>
                                Você pagara na entrega
                            </p>

                        </div>

                    )}

                    <div className="pagamento-input-group">

                        <label>Endereço</label>

                        <textarea
                            placeholder="Digite seu endereço..."
                            value={endereco}
                            onChange={(e) =>
                                setEndereco(e.target.value)
                            }
                        />

                    </div>

                </div>

                <div className="resumo-pagamento">

                    <h2>Resumo</h2>

                    {itens.map((item) => (

                        <div
                            className="item-resumo"
                            key={item.id}
                        >

                            <span>
                                {item.nome_produto}
                                x{item.quantidade}
                            </span>

                            <span>
                                R$
                                {" "}
                                {(
                                    item.preco *
                                    item.quantidade
                                ).toFixed(2)}
                            </span>

                        </div>

                    ))}

                    <div className="linha-total">

                        <span>Total</span>

                        <strong>
                            R$ {total.toFixed(2)}
                        </strong>

                    </div>

                    <button
                        className="btn-pagar"
                        onClick={finalizarCompra}
                    >
                        Finalizar Pedido
                    </button>

                </div>

            </section>

            <BotaoSubir />
            <Footer />

        </div>
    );
}