// ProductCard.jsx
import { FaStar, FaRegStar, FaShoppingCart, FaHeart } from "react-icons/fa";


export default function ProductCard({
  image,
  title,
  rating = 4.5,
  price = 259.9,
  oldPrice,
  pixPrice,
  discount = 0,
  onAddToCart = () => {},
  onFavorite = () => {},
}) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;

  return (
    <article className="group relative rounded-xl border border-white/10 bg-[#0d0d0d] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:border-white/20">
      {/* selo de desconto */}
      {discount > 0 && (
        <span className="absolute left-3 top-3 rounded-md bg-yellow-500 px-2 py-1 text-xs font-bold text-black">
          -{discount}%
        </span>
      )}

      {/* imagem (sem distorcer) */}
      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-white">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* infos */}
      <div className="mt-3 space-y-1">
        
        <h3 className="line-clamp-2 text-base font-semibold text-white">{title}</h3>

        {/* estrelas */}
        <div className="flex items-center gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => {
            if (i < full) return <FaStar key={i} />;
            if (i === full && half) return <FaStar key={i} className="opacity-50" />;
            return <FaRegStar key={i} className="opacity-50" />;
          })}
          <span className="ml-1 text-xs text-white/60">{rating.toFixed(1)}</span>
        </div>

        {/* preços */}
        <div className="mt-1">
          {oldPrice && (
            <span className="mr-2 text-sm text-white/40 line-through">
              {formatBRL(oldPrice)}
            </span>
          )}
          <span className="text-lg font-extrabold text-yellow-400">
            {formatBRL(price)}
          </span>
          {pixPrice && (
            <p className="text-xs text-emerald-400/90">no Pix: {formatBRL(pixPrice)}</p>
          )}
        </div>
      </div>

      {/* ações */}
      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={onAddToCart}
          className="inline-flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg bg-yellow-500 px-3 py-2 text-sm font-semibold text-black transition hover:bg-yellow-400"
        >
          <FaShoppingCart /> Comprar
        </button>
        <button
          onClick={onFavorite}
          className="inline-flex cursor-pointer  items-center justify-center rounded-lg border border-white/15 p-2 text-white/80 transition hover:border-white/30 hover:text-white"
          aria-label="Favoritar"
        >
          <FaHeart className="hover:text-green-500"/>
        </button>
      </div>
    </article>
  );
}

function formatBRL(n) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
