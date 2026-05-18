import React from 'react';

import coadorImg from '../../assets/coadormetal.png'; 
import xicaraImg from '../../assets/xicarasimples.png';
import filtroImg from '../../assets/filtropapel.png';
import graosImg from '../../assets/graosdecorativos.png';

const produtos = [
  {
    id: 1,
    nome: 'Coador de metal',
    preco: 'R$ 27,90',
    imagem: coadorImg, 
    corFundo: 'vinho'
  },
  {
    id: 2,
    nome: 'Xícara simples',
    preco: 'R$ 17,90',
    imagem: xicaraImg,
    corFundo: 'bege'
  },
  {
    id: 3,
    nome: 'Filtro de papel',
    preco: 'R$ 8,90',
    imagem: filtroImg,
    corFundo: 'vinho'
  }
];

export default function DestaquesLoja() {
  return (
    <div className="container-destaques">
      <img 
        src={graosImg} 
        alt="Grãos de café" 
        className="graos-decorativos" 
      />

      <h2 className="titulo-secao">
        Confira os destaques da nossa loja!
      </h2>

      <div className="grid-produtos">
        {produtos.map((produto) => (
          <div key={produto.id} className={`card-produto ${produto.corFundo}`}>
            <div className="container-imagem">
              <img src={produto.imagem} alt={produto.nome} />
            </div>
            <div className="info-produto">
              <h3>{produto.nome}</h3>
              <p className="preco">{produto.preco}</p>
              <button className="btn-ver-produto">Ver produto</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}