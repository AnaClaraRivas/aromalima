import React from 'react';

const CardAssinatura = ({ plano, preco, descricao, aoClicar }) => {
  return (
    <div className="cartao-assinatura">
      <h3 className="assinatura-plano">{plano}</h3>
      <p className="assinatura-preco">R$ {preco}</p>
      <p className="assinatura-descricao">{descricao}</p>
      
      <button className="botao-assinatura" onClick={aoClicar}>
        Ver assinatura
      </button>
    </div>
  );
};

export default CardAssinatura;