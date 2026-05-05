import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import "../styles/login.css";
import { Mail, Lock } from "lucide-react";
import cafeCadastro from "../assets/img/img_cadastro.png";

export default function Esqueceu() {
  const navigate = useNavigate();
  return (
    <div className="login-container">

      {/* lado esquerdo */}
      <div className="login-left">

        <div className="form-box">

          <h1>Esqueceu sua senha?</h1>
          <p className="instrucao-redefinir">Digite seu email e redefina sua senha.</p>

          {/* email */}
          <label>
            <Mail size={18} className="input-icon" />
            Email
          </label>
          <input type="email" placeholder="Seu email" />

          {/* redefinir */}
          <button className="login-btn" onClick={() => navigate("/redefinir")}>
            Redefinir senha
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