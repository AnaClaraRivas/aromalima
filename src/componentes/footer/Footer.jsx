import React from "react";
import "./Footer.css";
import logo from "../../assets/img/logo/logo_escura.png"; 

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* logo e slogan */}
        <div className="footer-brand">
          <div className="brand-header">
            <img src={logo} alt="Aroma Lima Logo" className="footer-logo" />
            <h1>AROMA LIMA</h1>
          </div>
          <p>Mais que café, uma experiência.</p>
        </div>

        {/* acesso rápido */}
        <div className="footer-links">
          <h3>ACESSO RÁPIDO</h3>
          <div className="links-grid">
            <ul className="links-column">
              <li><a href="/">Home</a></li>
              <li><a href="/sobre">Sobre</a></li>
              <li><a href="/loja">Loja</a></li>
              <li><a href="/assinaturas">Assinaturas</a></li>
            </ul>
            <ul className="links-column">
              <li><a href="/cursos">Cursos</a></li>
              <li><a href="/contato">Contato</a></li>
            </ul>
          </div>
        </div>

      </div>

      {/* linha */}
      <hr className="footer-divider" />
      
      <div className="footer-bottom">
        <p>Todos os direitos reservados.</p>
        <p><a href="/termos">Termos de política e privacidade</a></p>
      </div>
    </footer>
  );
}