import React, { useState } from "react";
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
        <li className="active" onClick={() => navigate("/")}>Home</li>
        <li>Sobre</li>
        <li>Loja</li>
        <li>Assinaturas</li>

        {/* dropdown */}
        <li className="dropdown">
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

      {/* Lado Direito: Ícones e Toggle */}
      <div className="right-side">
        {/* Ícone de Sacola (Visível em todos os modos ou ajuste se preferir) */}
        <ShoppingBag size={22} className="icon-item" />

        {/* Ícone de Usuário (Visível em todos os modos, redireciona para login) */}
        <User 
          size={22} 
          className="icon-item" 
          onClick={() => navigate("/login")} 
        />

        {/* Botão Hambúrguer (Aparece apenas no mobile via CSS) */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
}