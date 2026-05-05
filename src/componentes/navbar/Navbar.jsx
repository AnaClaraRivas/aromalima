import React, { useState } from "react";
// rotas
import { useNavigate } from "react-router-dom";
import { ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import "./Navbar.css";
import logo from "../../assets/img/logo/logo_clara.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* logo */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* menu */}
      <ul className={`menu ${menuOpen ? "active" : ""}`}>
        <li className="active">Home</li>
        <li>Sobre</li>
        <li>Loja</li>
        <li>Assinaturas</li>

        {/* dropdown */}
        <li className="dropdown">

          {/* header clicável no mobile */}
          <div 
            className="dropdown-header"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Conteúdos
            <ChevronDown 
              size={18} 
              className={`arrow ${dropdownOpen ? "open" : ""}`} 
            />
          </div>

          <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
            <p>Blog</p>
            <p>Cursos e workshops</p>
          </div>
        </li>

        <li>Contato</li>
      </ul>

      {/* ícones */}
      <div className="icones">
        <ShoppingBag size={20} />
        <User size={20} onClick={() => navigate("/login")} />
      </div>


      {/* botão hamburguer */}
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </div>
    </nav>
  );
}