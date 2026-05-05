import React from 'react';
import './CardCurso.css'; // Importando o arquivo que vamos criar abaixo

const CardCurso = ({ imagem, titulo, aoClicar }) => {
  return (
    <div className="card-curso-container" onClick={aoClicar}>
      <div className="card-curso-imagem">
        <img src={imagem} alt={titulo} className="card-curso-img" />
      </div>

      <div className="card-curso-botao">
        <h3 className="card-curso-titulo">{titulo}</h3>
        
        <button className="curso-botao">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            className="card-curso-icone"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CardCurso;