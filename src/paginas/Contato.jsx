import React from 'react';

import Navbar from "../componentes/navbar/Navbar";
import Footer from "../componentes/footer/Footer";
import BotaoSubir from "../componentes/BotaoSubir";

import "../styles/global.css";
import "../styles/contato.css";

import imgSobre3 from "../assets/img/img_sobre3.png"; 
import mapa from "../assets/img/Mapa.png"; 


export default function Contato() {
  return (
    <>
      <Navbar />
        <section className="contato-topo">
        <div className="contato-content">
            <h1>CONTATO</h1>

            <p className="descricao-contato">
            Estamos prontos para tornar seu momento ainda mais especial. 
            Entre em contato conosco e descubra o sabor de um café feito com paixão.
            </p>
        </div>
        </section>

      <section className="contato-container">

        <div className="contato-card">

          {/* esquerda */}
          <div className="info-box">

            <div className="info-item">
              <h3>Localização</h3>
              <p>
                Rua Exemplo, 123 - Centro <br />
                São Paulo - SP
              </p>
            </div>

            <div className="info-item">
              <h3>Horário de funcionamento</h3>
              <p>
                Segunda a Sexta: 08h às 19h <br />
                Sábado: 09h às 18h <br />
                Domingo: 09h às 14h
              </p>
            </div>

          </div>

          {/* mapa */}
          <div className="mapa-box">
            <img src={mapa} alt="Mapa" />
          </div>

        </div>

        {/* contato */}
        <div className="fale-conosco">

          <div className="texto-contato">

            <h2>Fale com a gente</h2>

            <p>
              Entre em contato para dúvidas, pedidos ou informações:
            </p>

            <div className="contatos">
              <p>WhatsApp: (11) 99999-9999</p>
              <p>E-mail: aromalima@gmail.com</p>
            </div>

            <div className="redes">
              <a href="#">ⓕ</a>
              <a href="#">ⓕ</a>
              <a href="#">ⓕ</a>
            </div>

          </div>

        </div>

        {/* forms */}
        <div className="formulario-area">

          <form className="formulario">

            <div className="input-group">
              <label>Nome completo</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" />
            </div>

            <div className="input-group">
              <label>Escreva sua mensagem</label>
              <textarea rows="4"></textarea>
            </div>

            <button type="submit">ENVIAR</button>

          </form>

          <div className="img-cafe">
            <img src={imgSobre3} alt="Café" />
          </div>

        </div>

      </section>

      <BotaoSubir />
      <Footer />
    </>
  );
}