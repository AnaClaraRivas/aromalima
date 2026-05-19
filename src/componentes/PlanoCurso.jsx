import React from 'react';

const PlanoCard = ({ titulo, descricao, vantagens, preco, dark = true }) => {
  return (
    <div className={`plano-card ${dark ? 'plano-dark' : 'plano-light'}`}>
      <div className="plano-header">
        <h3>{titulo}</h3>
      </div>
      <div className="plano-body">
        <p className="plano-desc">{descricao}</p>
        <ul className="plano-vantagens">
          {vantagens.map((v, index) => (
            <li key={index}>
              <span className="check">✓</span> {v}
            </li>
          ))}
        </ul>
        <div className="plano-footer">
          <div className="preco-container">
            <span className="moeda">R$</span>
            <span className="valor">{preco}</span>
          </div>
          <p className="ao-mes">ao mês</p>
          <button className="btn-assinar">Assinar</button>
        </div>
      </div>
    </div>
  );
};

export default PlanoCard;