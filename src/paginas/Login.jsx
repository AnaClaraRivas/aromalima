import React from "react";
import "../styles/global.css";
import "../styles/login.css";
import { Mail, Lock } from "lucide-react";
import cafe from "../assets/img/img_login.png";
import googleIcon from "../assets/img/icon_google.png";

export default function Login() {
  return (
    <div className="login-container">

      {/* lado esquerdo */}
      <div className="login-left">

        <div className="form-box">

          <h1>Faça seu login!</h1>

          {/* EMAIL */}
          <label>
            <Mail size={18} className="input-icon" />
            Email
          </label>
          <input type="email" placeholder="Seu email" />

          {/* SENHA */}
          <label>
            <Lock size={18} className="input-icon" />
            Senha
          </label>
          <input type="password" placeholder="Sua senha" />

          {/* ESQUECEU SENHA */}
          <span className="forgot">Esqueceu a senha?</span>

          {/* GOOGLE */}
          <button className="google-btn">
            <img src={googleIcon} alt="Google" />
            Entrar com o Google
          </button>

          {/* LOGIN */}
          <button className="login-btn">
            Entrar
          </button>

          {/* CADASTRO */}
          <p className="register">
            Não tem uma conta? <span>Crie agora!</span>
          </p>

        </div>
      </div>

      {/* LADO DIREITO */}
      <div className="login-right">
        <img src={cafe} alt="Café" />
      </div>

    </div>
  );
}