import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, User, Menu, X, ChevronDown } from "lucide-react";
import "./NavbarEscura.css";
import logoEscura from "../../assets/img/logo/logo_escura.png";

export default function NavbarEscura() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* logo */}
      <div className="logo">
        <img src={logoEscura} alt="Logo" />
      </div>

      {/* menu */}
      <ul className={`menu ${menuOpen ? "active" : ""}`}>
        <li className="active" onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/sobre")}>Sobre</li>
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

      {/* lado direito */}
      <div className="right-side">
        <ShoppingBag size={22} className="icon-item" />
        <User 
          size={22} 
          className="icon-item" 
          onClick={() => navigate("/login")} 
        />

        {/* botão hamburguer  */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </nav>
  );
}