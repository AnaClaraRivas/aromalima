import React from 'react';
import { ArrowRight } from 'lucide-react';

const WorkshopCard = ({ imagem, titulo, data, modalidade }) => {
  return (
    <div className="workshop-card">
      <div className="workshop-img-wrapper">
        <img src={imagem} alt={titulo} />
      </div>

      <div className="workshop-content">
        <div className="workshop-info">
          <h3>{titulo}</h3>
          <p>Data: {data}</p>
          <p>{modalidade}</p>
        </div>

        <button className="workshop-btn">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default WorkshopCard;