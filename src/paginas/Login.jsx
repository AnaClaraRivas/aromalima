import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/global.css";
import "../styles/login.css";

import { Mail, Lock } from "lucide-react";

import cafeCadastro from "../assets/img/img_cadastro.png";
import googleIcon from "../assets/img/icon_google.png";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [mensagem, setMensagem] = useState("");


  useEffect(() => {

    const usuario = localStorage.getItem("usuario");

    if (usuario) {
      navigate("/perfil");
    }

  }, []);




  async function fazerLogin() {

    if (!email || !senha) {

      setMensagem("Preencha todos os campos");

      return;
    }

    try {

      const resposta = await fetch(
        "http://localhost/aromalimaback/rotas/login.php",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            senha,
          }),
        }
      );

      const dados = await resposta.json();

      if (dados.status === "ok") {

        // salva usuário
        localStorage.setItem(
          "usuario",
          JSON.stringify(dados.usuario)
        );

        setMensagem(dados.mensagem);

        // vai pro perfil
        setTimeout(() => {
          navigate("/perfil");
        }, 1000);

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

          <h1>Faça seu login!</h1>


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


          {/* esqueceu senha */}
          <span
            className="forgot"
            onClick={() => navigate("/esqueceu")}
          >
            Esqueceu a senha?
          </span>


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


          {/* login */}
          <button
            className="login-btn"
            onClick={fazerLogin}
          >
            Entrar
          </button>


          {/* cadastro */}
          <button
            className="secondary-btn"
            onClick={() => navigate("/cadastro")}
          >
            Criar nova conta
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