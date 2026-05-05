import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import "../styles/cadastro.css";
import { Mail, Lock, User } from "lucide-react";
import cafeCadastro from "../assets/img/img_cadastro.png";
import googleIcon from "../assets/img/icon_google.png";

export default function Cadastro() {
    const navigate = useNavigate();
  return (
    <div className="login-container">

      {/* lado esquerdo */}
      <div className="login-left">

        <div className="form-box">

          <h1>Faça seu cadastro!</h1>

          {/* nome */}
          <label>
            <User size={18} className="input-icon" />
            Nome completo
          </label>
          <input type="email" placeholder="Seu nome completo" />

          {/* email */}
          <label>
            <Mail size={18} className="input-icon" />
            Email
          </label>
          <input type="email" placeholder="Seu email" />

          {/* senha */}
          <label>
            <Lock size={18} className="input-icon" />
            Senha
          </label>
          <input type="password" placeholder="Sua senha" />

          {/* google */}
          <button className="google-btn">
            <img src={googleIcon} alt="Google" />
            Entrar com o Google
          </button>

          {/* btn criar */}
          <button className="login-btn" onClick={() => navigate("/login")}>
            Criar conta
          </button>

          {/* login */}
          <button className="secondary-btn" onClick={() => navigate("/login")}>
            Já tem uma conta? Faça seu login
          </button>

        </div>
      </div>

      {/* lado direito */}
      <div className="login-right">
        <img src={cafeCadastro} alt="Café" />
      </div>

    </div>
  );
}