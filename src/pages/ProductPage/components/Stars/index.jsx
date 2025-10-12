import { FaStar, FaRegStar } from "react-icons/fa";

export default function Stars({ rating = 4.5 }) {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;

  return (
    <div className="w-25 mt-1 cursor-pointer flex items-center gap-1 text-yellow-400 ">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < full) return <FaStar key={i} />;
        if (i === full && half)
          return <FaStar key={i} className="opacity-50" />;
        return <FaRegStar key={i} className="opacity-50" />;
      })}
    </div>
  );
}
