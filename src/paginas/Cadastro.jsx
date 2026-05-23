import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/global.css";
import "../styles/cadastro.css";

import { Mail, Lock, User } from "lucide-react";

import cafeCadastro from "../assets/img/img_cadastro.png";
import googleIcon from "../assets/img/icon_google.png";

export default function Cadastro() {

  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [mensagem, setMensagem] = useState("");



  async function cadastrar() {

    if (!nome || !email || !senha) {

      setMensagem("Preencha todos os campos");

      return;
    }

    try {

      const resposta = await fetch(
        "http://localhost/aromalimaback/rotas/cadastro.php",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            nome,
            email,
            senha,
          }),
        }
      );

      const dados = await resposta.json();

      if (dados.status === "ok") {

        setMensagem(dados.mensagem);

        setTimeout(() => {
          navigate("/login");
        }, 1500);

      } else {

        setMensagem(dados.mensagem);

      }

    } catch (erro) {

      console.log(erro);

      setMensagem("Erro ao conectar com o servidor");

    }

  }



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

          <input
            type="text"
            placeholder="Seu nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />


          {/* email */}
          <label>
            <Mail size={18} className="input-icon" />
            Email
          </label>

          <input
            type="email"
            placeholder="Seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />


          {/* senha */}
          <label>
            <Lock size={18} className="input-icon" />
            Senha
          </label>

          <input
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />


          {/* mensagem */}
          {mensagem && (
            <p className="mensagem-login">
              {mensagem}
            </p>
          )}


          {/* google */}
          <button className="google-btn">
            <img src={googleIcon} alt="Google" />
            Entrar com o Google
          </button>


          {/* btn criar */}
          <button
            className="login-btn"
            onClick={cadastrar}
          >
            Criar conta
          </button>


          {/* login */}
          <button
            className="secondary-btn"
            onClick={() => navigate("/login")}
          >
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