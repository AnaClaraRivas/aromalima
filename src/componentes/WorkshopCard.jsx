import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WorkshopCard = ({
  imagem,
  horario,
  local,
  titulo,
  data,
  modalidade,
  workshop
}) => {

  const navigate = useNavigate();

  return (
    <div className="workshop-card">

      <div className="workshop-img-wrapper">
        <img src={imagem} alt={titulo} />
      </div>

      <div className="workshop-content">

        <div className="workshop-info">
          <h3>{titulo}</h3>
          <p>Data: {data}</p>
          <p>Horário: {horario}</p>
          <p>Local: {local}</p>
          <p>{modalidade}</p>
        </div>

        <button
          className="workshop-btn"
          onClick={() =>
            navigate("/detalheWorkshop", {
              state: workshop
            })
          }
        >
          <ArrowRight size={20} />
        </button>

      </div>

    </div>
  );
};

export default WorkshopCard;