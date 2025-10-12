import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


// Passe as imagens por props ou importe no arquivo e envie no array
export default function Carousel({ images = [] }) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const go = (dir) => {
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return total - 1;
      if (next >= total) return 0;
      return next;
    });
  };

  if (!total) return null;

  return (
    <div className="relative w-100  h-130 max-w-xl aspect-[16/9] overflow-hidden rounded-xl shadow-lg">
      {/* trilho das imagens */}
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i + 1}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* setas */}
      <button
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 rounded-full grid place-items-center hover:bg-black/60 active:scale-95 transition cursor-pointer"
        aria-label="Anterior"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-9 h-9 rounded-full grid place-items-center hover:bg-black/60 active:scale-95 transition cursor-pointer"
        aria-label="Próximo"
      >
        <FaChevronRight size={20} />
      </button>

      {/* indicadores (bolinhas) */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={[
              "h-2 w-2 rounded-full cursor-pointer transition",
              i === index ? "bg-white" : "bg-white/50 hover:bg-white/70",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}
