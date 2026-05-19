import React from 'react';

import Navbar from "../componentes/navbar/Navbar";
import PlanoCard from '../componentes/PlanoCurso';
import Footer from "../componentes/footer/Footer";

import "../styles/global.css";
import "../styles/Assinaturas.css";

import cafesaco1 from '../assets/cafesaco1.png';
import cafesaco2 from '../assets/cafesaco2.png';

const Assinaturas = () => {

    const planos = [
        {
            titulo: "Assinatura Prata",
            descricao: "Ideal para quem quer um café de qualidade no dia a dia",
            preco: "37,00",
            vantagens: [
                "1 pacote de café especial por mês",
                "Opção de grão ou moído",
                "Torra fresca",
                "Perfil equilibrado"
            ]
        },
        {
            titulo: "Assinatura Ouro",
            descricao: "Para quem quer mais variedade e experiência",
            preco: "79,00",
            vantagens: [
                "2 pacotes de cafés especiais por mês",
                "Cafés de origens diferentes",
                "Opção de moagem personalizada"
            ]
        }
    ];

    return (
        <div>

            <Navbar />

            <div className="assinaturaspag">

                <section className="assinaturasprim">

                    <h1>ASSINATURAS</h1>

                    <p className="intro">
                        Descubra uma nova forma de apreciar café.
                        Com a nossa assinatura, você recebe em casa
                        grãos selecionados, torrados artesanalmente
                        e preparados para transformar sua rotina em
                        uma experiência única.
                    </p>

                    <div className="info-beneficios">

                        <div className="beneficio">
                            Cafés especiais selecionados
                        </div>

                        <div className="beneficio">
                            Entrega mensal para todo Brasil
                        </div>

                        <div className="beneficio">
                            Torra fresca e artesanal
                        </div>

                    </div>

                    <div className="img-destaque-container">
                        <img src={cafesaco1} alt="Café" className="img-saco" />
                        <img src={cafesaco2} alt="Café" className="img-saco" />
                    </div>

                </section>

                <section className="planos-grid">

                    {planos.map((plano, i) => (
                        <PlanoCard
                            key={i}
                            {...plano}
                            dark={true}
                        />
                    ))}

                </section>

                <section className="plano-destaque-unico">

                    <PlanoCard
                        titulo="Assinatura Diamante"
                        descricao="Uma experiência completa e exclusiva"
                        preco="147,00"
                        vantagens={[
                            "3 pacotes de cafés especiais por mês",
                            "Edições limitadas e microlotes",
                            "Curadoria especial do barista",
                            "Brindes ocasionais (amostras ou surpresas)"
                        ]}
                        dark={false}
                    />

                </section>

                <section className="perguntas">

                    <h2>Perguntas frequentes</h2>

                    <div className="perguntas-grid">

                        <div className="perguntas-card">

                            <h3>
                                Posso cancelar quando quiser?
                            </h3>

                            <p>
                                Sim! Você pode cancelar sua assinatura
                                a qualquer momento sem taxas adicionais.
                            </p>

                        </div>

                        <div className="perguntas-card">

                            <h3>
                                Os cafés mudam todos os meses?
                            </h3>

                            <p>
                                Sim! Trabalhamos com uma curadoria
                                especial para trazer novas experiências
                                constantemente.
                            </p>

                        </div>

                        <div className="perguntas-card">

                            <h3>
                                Os cafés já vêm moídos?
                            </h3>

                            <p>
                                Você pode escolher entre café em grãos
                                ou moído no perfil ideal para o seu método.
                            </p>

                        </div>

                    </div>

                </section>

            </div>

            <Footer />

        </div>
    );
};

export default Assinaturas;

