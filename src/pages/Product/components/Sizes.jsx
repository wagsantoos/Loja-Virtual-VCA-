import { useState } from "react";

export default function Sizes() {
  const [selectedSize, setSelectedSize] = useState("");

  const sizes = ["PP", "P", "M", "G", "GG", "XL1", "XL2", "XL3", "XL4", "XL5"];

  const selected = (size) => {
    setSelectedSize(size);
  };

  const buy = () => {
    if (!selectedSize) {
      alert("Selecione um tamanho antes de comprar 😅");
      return
    } else {
      alert(`Você selecionou o tamanho ${selectedSize} 🛒`);
    }
  };

  return (
    <div className="flex flex-col items-end  gap-4 mt-4">
      <div className="grid grid-cols-5 gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => selected(size)}
            className={`border px-2 py-2 rounded-md font-medium transition text-sm cursor-pointer
              ${
                selectedSize === size
                  ? "border-yellow-500 text-yellow-600 "
                  : "border-gray-400 text-gray-800 hover:border-yellow-500 hover:text-yellow-600"
              }`}
          >
            {size}
          </button>
        ))}
      </div>
      <button
        onClick={buy}
        className="cursor-pointer bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-md flex items-center gap-2 transition"
      >
        🛒 Comprar
      </button>
    </div>
  );
}
