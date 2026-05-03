import { FaStar } from "react-icons/fa";

export default function CardBebida({ nome, imagem, nota = "5.0" }) {
  return (
    <div className="card-bebida">
      <div className="img-container">
        <img src={imagem} alt={nome} />

        <div className="badge">
          <span className="nota">{nota}</span>

          <FaStar className="estrela" />
        </div>
      </div>

      <p className="nome-bebida">{nome}</p>
    </div>
  );
}