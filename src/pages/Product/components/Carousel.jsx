import React, { useState, useEffect } from "react";
import camisaBranca from "../../../assets/img/ImgPng/camisa-torcedor-branca.png";
import medidasCamisa from "../../../assets/img/medidas-camisa.png";

const imagens = [
  camisaBranca,
  medidasCamisa
];

export default function Carrossel() {
  const [index, setIndex] = useState(0);

  // Muda imagem automaticamente a cada 12 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 12*1000);
    return () => clearInterval(intervalo);
  }, []);

  // Funções pra trocar manualmente
  const anterior = () => {
    setIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  const proximo = () => {
    setIndex((prev) => (prev + 1) % imagens.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-xl">
      {/* Imagem */}
      <img
        src={imagens[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-[400px] object-contain transition-all duration-700"
      />

      {/* Botões esquerda/direita */}
      <button
        onClick={anterior}
        className="cursor-pointer absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-yellow-500 transition"
      >
        ‹
      </button>
      <button
        onClick={proximo}
        className="cursor-pointer absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-yellow-500 transition"
      >
        ›
      </button>

      {/* Bolinhas */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {imagens.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-yellow-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
