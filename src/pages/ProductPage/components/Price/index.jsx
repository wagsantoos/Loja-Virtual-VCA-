function formatBRL(n) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function PriceDef({ price = 259.9 }) {
  return (
    <span className="text-4xl font-extrabold text-yellow-400">
      {formatBRL(price)}
    </span>
  );
}
