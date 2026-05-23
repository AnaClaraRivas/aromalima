import React from 'react';
import CardCurso from '../componentes/home/CardCurso';
import WorkshopCard from '../componentes/WorkshopCard';
import Navbar from "../componentes/navbar/Navbar";
import Footer from "../componentes/footer/Footer";
import BotaoSubir from "../componentes/BotaoSubir";
import "../styles/Workshops.css";

import graosImg from '../assets/graosdecorativos.png';
import barista from "../assets/barista.png";
import barista2 from "../assets/barista2.jfif";
import barista3 from "../assets/barista3.jfif";
import degustacao from "../assets/degustacao.jfif";
import iniciantes from "../assets/iniciantes.jpg";
import moagem from "../assets/moagem.jfif";
import cafeImg from "../assets/cafeinicial.png";

const Workshops = () => {

    const cursos = [
        {
            id: 1,
            titulo: "Preparação de café simples",
            imagem: barista,
            descricao:
            "Aprenda os fundamentos do preparo do café e descubra técnicas simples para melhorar aroma, sabor e extração.",
            duracao: "2 semanas",
            modalidade: "Presencial",
            horario: "18:00",
            local: "Aroma Lima Cafeteria"
        },

        {
            id: 2,
            titulo: "Formação de Barista",
            imagem: barista2,
            descricao:
            "Desenvolva habilidades profissionais de barista, incluindo espresso, vaporização de leite e latte art.",
            duracao: "1 mês",
            modalidade: "Presencial",
            horario: "19:00",
            local: "Aroma Lima Cafeteria"
        },

        {
            id: 3,
            titulo: "Métodos Artesanais de Café",
            imagem: barista3,
            descricao:
            "Conheça métodos artesanais como V60, prensa francesa e Chemex para extrair o melhor do café.",
            duracao: "3 semanas",
            modalidade: "Online",
            horario: "20:00",
            local: "Plataforma Aroma Lima"
        }
    ];

    return (

        <div className="cursos-container">
            <Navbar />

            {/* SEÇÃO CURSOS */}
            <section className="section-cursos">
                <h1 className="titulocursos">CURSOS E WORKSHOPS</h1>

                <img src={graosImg} className="coisinhosdecorativos" />

                <div className="conteudoinicial">

                    <p className="descricaoo">
                        Confira nossos cursos e aprofunde seus conhecimentos no universo do café,
                        aprendendo desde o básico até técnicas mais avançadas de preparo.
                    </p>

                    <div className="cards-grid">

                        {cursos.map((curso) => (

                            <CardCurso
                                key={curso.id}
                                titulo={curso.titulo}
                                imagem={curso.imagem}
                                curso={curso}
                            />

                        ))}

                    </div>

                </div>
            </section>

            {/* SEÇÃO WORKSHOPS */}
            <section className="workshopss">
                <div className="conteudoinicial">

                    <h2 className="subtitulo light">WORKSHOPS</h2>

                    <p className="descricaoo light">
                        Participe dos nossos workshops e viva uma experiência prática, onde você aprende fazendo e descobre novos sabores e técnicas.
                    </p>

                    <div className="cards-grid">

                        <WorkshopCard
                            titulo="Degustação Sensorial de Café"
                            data="22/05/2026"
                            modalidade="Presencial"
                            imagem={degustacao}
                            workshop={{
                                titulo: "Degustação Sensorial de Café",
                                data: "22/05/2026",
                                modalidade: "Presencial",
                                imagem: degustacao,
                                horario: "18:30",
                                local: "Aroma Lima Cafeteria",
                                descricao:
                                "Aprenda a identificar aromas, sabores e características sensoriais do café em uma experiência prática e envolvente."
                            }}
                        />

                        <WorkshopCard
                            titulo="Café para Iniciantes"
                            data="25/05/2026"
                            modalidade="Presencial"
                            imagem={iniciantes}
                            workshop={{
                                titulo: "Café para Iniciantes",
                                data: "25/05/2026",
                                modalidade: "Presencial",
                                imagem: iniciantes,
                                horario: "18:00",
                                local: "Aroma Lima Cafeteria",
                                descricao:
                                "Descubra os fundamentos do café, métodos de preparo e dicas essenciais para começar no universo cafeeiro."
                            }}
                        />

                        <WorkshopCard
                            titulo="Métodos de Moagem"
                            data="25/05/2026"
                            modalidade="Online"
                            imagem={moagem}
                            workshop={{
                                titulo: "Métodos de Moagem",
                                data: "25/05/2026",
                                modalidade: "Online",
                                imagem: moagem,
                                horario: "19:00",
                                local: "Plataforma Aroma Lima",
                                descricao:
                                "Entenda os diferentes tipos de moagem e como eles influenciam diretamente no sabor e na extração do café."
                            }}
                        />

                    </div>
                </div>
            </section>

            {/* SEÇÃO BLOG */}
            <section className="blog">
                <div className="blog-conteudo">

                    <div className="texto-blogs">

                        <h2>ACESSE NOSSO BLOG!</h2>

                        <p>
                            Clique no botão para ficar por dentro das dicas,
                            receitas e muito mais!
                        </p>

                        <div className="mini-info-blog">
                            <span>Dicas</span>
                            <span>Receitas</span>
                            <span>Curiosidades</span>
                        </div>

                        <button className="btn-blog">
                            Ver blog
                        </button>

                    </div>

                    <div className="img-blogs">
                        <img
                            src={cafeImg}
                            alt="Xícara de café vista de cima"
                        />
                    </div>

                </div>
            </section>

            <BotaoSubir />
            <Footer />

        </div>
    );
};

export default Workshops;