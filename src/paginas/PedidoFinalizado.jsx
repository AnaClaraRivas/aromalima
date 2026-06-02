import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EscuraNavbar from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";

import "../styles/pedidoFinalizado.css";

export default function PedidoFinalizado() {

    const navigate = useNavigate();
    const [pedidoId, setPedidoId] = useState(null);

    useEffect(() => {

        async function buscarUltimoPedido() {
            try {

                const usuario = JSON.parse(localStorage.getItem("usuario"));

                const usuarioId = usuario?.id;

                const res = await fetch(
                    `http://localhost/aromalimaback/rotas/meus_pedidos.php?usuario_id=${usuarioId}`
                );

                const data = await res.json();

                console.log("PEDIDOS:", data);

                if (Array.isArray(data) && data.length > 0) {

                    const ultimo = data[0];

                    setPedidoId(
                        ultimo.id || ultimo.pedido_id || ultimo.id_pedido
                    );
                }

            } catch (error) {
                console.error("Erro ao buscar pedido:", error);
            }
        }

        buscarUltimoPedido();

    }, []);

    async function limparCarrinho() {
        await fetch(
            "http://localhost/aromalimaback/rotas/carrinho.php",
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "usuario_id=1"
            }
        );
    }

    async function voltarInicio() {
        await limparCarrinho();
        navigate("/");
    }

    return (

        <div className="pedidofin">

            <EscuraNavbar />

            <section className="pedido-container">

                <div className="pedido-card">

                    <div className="check">✓</div>

                    <h1>Pedido realizado!</h1>

                    <p>Seu pedido foi enviado com sucesso.</p>

                    <div className="pedido-info">

                        <span>Número do pedido</span>

                        <strong>
                            #{pedidoId || "carregando..."}
                        </strong>

                    </div>

                    <div className="pedido-status">

                        <div className="status-item ativo">
                            <div className="bolinha"></div>
                            <span>Pedido recebido</span>
                        </div>

                        <div className="linha-status"></div>

                        <div className="status-item">
                            <div className="bolinha"></div>
                            <span>Preparando café</span>
                        </div>

                        <div className="linha-status"></div>

                        <div className="status-item">
                            <div className="bolinha"></div>
                            <span>Saiu para entrega</span>
                        </div>

                    </div>

                    <button
                        className="btn-voltar"
                        onClick={voltarInicio}
                    >
                        Voltar para início
                    </button>

                </div>

            </section>

            <Footer />

        </div>
    );
}