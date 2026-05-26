import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EscuraNavbar from "../componentes/navbar/EscuraNavbar";
import Footer from "../componentes/footer/Footer";
import BotaoSubir from "../componentes/BotaoSubir";

import "../styles/carrinho.css";

export default function Carrinho() {
    const [itens, setItens] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const usuarioId = 1;

    const API = "http://localhost/aromalimaback/rotas/carrinho.php";

    useEffect(() => {
        fetch(`${API}?usuario_id=${usuarioId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setItens(data);
                setCarregando(false);
            })
            .catch(() => setCarregando(false));
    }, []);

    useEffect(() => {
        fetch(`${API}?usuario_id=${usuarioId}`)
            .then((res) => res.json())
            .then((data) => {
                setItens(data);
                setCarregando(false);
            })
            .catch(() => setCarregando(false));
    }, []);

    function removerItem(id) {
        fetch(API, {
            method: "DELETE",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `id=${id}`,
        }).then(() => {
            setItens((prev) => prev.filter((item) => item.id !== id));
        });
    }

    function diminuir(id) {
        setItens((prev) =>
            prev
                .map((item) =>
                    item.id === id
                        ? { ...item, quantidade: item.quantidade - 1 }
                        : item
                )
                .filter((item) => item.quantidade > 0)
        );

        fetch(API, {
            method: "PUT",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `id=${id}&acao=diminuir`,
        });
    }

    function aumentar(id) {
        setItens((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantidade: item.quantidade + 1 }
                    : item
            )
        );

        fetch(API, {
            method: "PUT",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `id=${id}&acao=aumentar`,
        });
    }

    const total = itens.reduce((acc, item) => {

        const preco = Number(
            String(item.preco)
                .replace(",", ".")
        );

        return acc + preco * item.quantidade;

    }, 0);
    const navigate = useNavigate();
    return (

        <div className="carrinho-page">

            <EscuraNavbar />

            <section className="carrinho-hero">
                <div className="carrinho-hero-content">
                    <h1>SEU CARRINHO</h1>
                    <p>Revise seus produtos antes de finalizar a compra</p>
                </div>
            </section>

            <section className="carrinho-container">

                {carregando ? (
                    <p className="loading">Carregando carrinho...</p>
                ) : itens.length === 0 ? (
                    <p className="vazio">Seu carrinho está vazio...</p>
                ) : (
                    <>
                        <div className="lista-carrinho">

                            {itens.map((item) => (
                                <div className="item-carrinho" key={item.id}>

                                    <div className="img-item">
                                        <img src={item.imagem} alt={item.nome_produto} />
                                    </div>

                                    <div className="info-item">
                                        <h3>{item.nome_produto}</h3>

                                        <p className="precocar">
                                            R$ {Number(item.preco).toFixed(2)}
                                        </p>
                                        <div className="quantidade">

                                            <button onClick={() => diminuir(item.id)}>
                                                −
                                            </button>

                                            <span>{item.quantidade}</span>

                                            <button onClick={() => aumentar(item.id)}>
                                                +
                                            </button>

                                        </div>
                                    </div>

                                    <div className="acoes-item">
                                        <button
                                            className="btn-remover"
                                            onClick={() => removerItem(item.id)}
                                        >
                                            Remover
                                        </button>
                                    </div>

                                </div>
                            ))}

                        </div>

                        <div className="resumo-carrinho">

                            <h2>Resumo da compra</h2>

                            <div className="linha-resumo">
                                <span>Subtotal</span>
                                <span>R$ {total.toFixed(2)}</span>
                            </div>

                            <div className="linha-resumo">
                                <span>Entrega</span>
                                <span>Grátis</span>
                            </div>

                            <div className="linha-total">
                                <span>Total</span>
                                <strong>R$ {total.toFixed(2)}</strong>
                            </div>

                            <button
                                className="btn-finalizar"
                                onClick={() => navigate("/pagamento")}
                            >
                                Finalizar compra
                            </button>

                            <button
                                className="btn-limpar"
                                onClick={() => setItens([])}
                            >
                                Limpar carrinho
                            </button>

                        </div>
                    </>
                )}

            </section>

            <BotaoSubir />
            <Footer />

        </div>
    );
}