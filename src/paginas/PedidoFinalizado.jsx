import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

import EscuraNavbar from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";

import "../styles/pedidoFinalizado.css";

export default function PedidoFinalizado() {

    const location = useLocation();

    const navigate = useNavigate();

    const pedidoId =
        location.state?.pedidoId || "001";

    return (

        <div className="pedidofin">

            <EscuraNavbar />

            <section className="pedido-container">

                <div className="pedido-card">

                    <div className="check">

                        ✓

                    </div>

                    <h1>
                        Pedido realizado!
                    </h1>

                    <p>
                        Seu pedido foi enviado com sucesso.
                    </p>

                    <div className="pedido-info">

                        <span>
                            Número do pedido
                        </span>

                        <strong>
                            #{pedidoId}
                        </strong>

                    </div>

                    <div className="pedido-status">

                        <div className="status-item ativo">

                            <div className="bolinha"></div>

                            <span>
                                Pedido recebido
                            </span>

                        </div>

                        <div className="linha-status"></div>

                        <div className="status-item">

                            <div className="bolinha"></div>

                            <span>
                                Preparando café
                            </span>

                        </div>

                        <div className="linha-status"></div>

                        <div className="status-item">

                            <div className="bolinha"></div>

                            <span>
                                Saiu para entrega
                            </span>

                        </div>

                    </div>

                    <button
                        className="btn-voltar"
                        onClick={() => navigate("/")}
                    >
                        Voltar para início
                    </button>

                </div>

            </section>

            <Footer />

        </div>

    );
}