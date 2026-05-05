import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import "../styles/login.css";
import { Mail, Lock } from "lucide-react";
import cafeCadastro from "../assets/img/img_cadastro.png";

export default function Redefinir() {
  const navigate = useNavigate();
  return (
    <div className="login-container">

      {/* lado esquerdo */}
      <div className="login-left">

        <div className="form-box">

          <h1>Esqueceu sua senha?</h1>
          <p className="instrucao-redefinir">Digite sua nova senha.</p>

          {/* senha */}
            <label>
                <Lock size={18} className="input-icon" />
                    Senha
            </label>
            <input type="password" placeholder="Sua senha" />

          {/* redefinir */}
          <button className="login-btn" onClick={() => navigate("/login")}>
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