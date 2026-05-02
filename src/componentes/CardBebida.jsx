import React from "react";

export default function CardBebida({ nome, imagem }) {
  return (
    <div className="card-bebida">
      <img src={imagem} alt={nome} />
      <p>{nome}</p>
    </div>
  );
}