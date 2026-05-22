import React from 'react';
import CardCurso from '../componentes/home/CardCurso';
import WorkshopCard from '../componentes/WorkshopCard';
import Navbar from "../componentes/navbar/Navbar";
import Footer from "../componentes/footer/Footer";
import BotaoSubir from "../componentes/BotaoSubir";
import "../styles/Workshops.css";

import graosImg from '../assets/graosdecorativos.png';
import barista from "../assets/barista.png";
import cafeImg from "../assets/cafeinicial.png";



const Workshops = () => {
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
                        <CardCurso titulo="Preparação de café simples" imagem={barista} />
                        <CardCurso titulo="Formação de Barista" imagem={barista} />
                        <CardCurso titulo="Métodos Artesanais de Café" imagem={barista} />
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
                            imagem={barista}
                        />
                        <WorkshopCard
                            titulo="Café para Iniciantes"
                            data="25/05/2026"
                            modalidade="Online"
                            imagem={barista}
                        />
                        <WorkshopCard
                            titulo="Café para Iniciantes"
                            data="25/05/2026"
                            modalidade="Online"
                            imagem={barista}
                        />
                    </div>
                </div>
            </section>

            {/* SEÇÃO BLOG */}
            <section className="blog">
                <div className="blog-conteudo">
                    <div className="texto-blogs">
                        <h2>ACESSE NOSSO BLOG!</h2>
                        <p>Clique no botão para ficar por dentro das dicas, receitas e muito mais!</p>
                        <div className="mini-info-blog">
                            <span> Dicas</span>
                            <span> Receitas</span>
                            <span> Curiosidades</span>
                        </div>
                        <button className="btn-blog">
                            Ver blog 
                        </button>
                    </div>
                    <div className="img-blogs">
                        <img src={cafeImg} alt="Xícara de café vista de cima" />
                    </div>
                </div>
            </section>

            <BotaoSubir />
            <Footer />

        </div>
    );
};

export default Workshops;