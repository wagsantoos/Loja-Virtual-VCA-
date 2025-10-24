import ButtonQuantityProduct from "./ButtonQuantityProduct";
import { MdDelete } from "react-icons/md"

function CardProductCar({ title, color = "Preta", size = "Padrão", image, price, priceDiscount }) {
  return (
    <div className="min-h-40 rounded-xl p-4 flex justify-between items-center bg-[#0d0d0d] text-white mt-2">
      <div className=" flex items-center gap-3 p-2">
        <img src={image} alt={title} className="w-20 h-auto rounded-xl" />
        <div className="text-xs">
          <h3 className="text-sm">{title}</h3>
          <p>Tamanho: {size}</p>
          <p>Cor: {color}</p>
        </div>
      </div>
      <div>
        <ButtonQuantityProduct />
      </div>
      <div className="text-xs flex justify-center items-center">
        <div>
          <p>R$ {price}</p>
          <p>ou R$ {priceDiscount}</p>
          <p>no Pix</p>
        </div>
        <div className="pl-4">
          <button className="">
            <MdDelete className="size-6 text-yellow-500 hover:text-red-500 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardProductCar;
