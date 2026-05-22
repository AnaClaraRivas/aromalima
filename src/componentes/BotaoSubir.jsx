import React, { useEffect, useState } from "react";

import "./botaoSubir.css";

export default function BotaoSubir() {

  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {

    function aparecerBotao() {

      if (window.scrollY > 300) {
        setMostrar(true);
      } else {
        setMostrar(false);
      }

    }

    window.addEventListener("scroll", aparecerBotao);

    return () => {
      window.removeEventListener("scroll", aparecerBotao);
    };

  }, []);

  function voltarTopo() {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }

  return (

    <>
      {mostrar && (

        <button
          className="scroll-top"
          onClick={voltarTopo}
        >
          ↑
        </button>

      )}
    </>

  );
}