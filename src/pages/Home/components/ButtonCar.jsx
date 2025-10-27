import { FaShoppingCart } from "react-icons/fa"

function ButtonCar() {
    return <button  className="px-4 py-1 rounded-lg text-gray-800 font-semibold bg-gradient-to-r from-yellow-500 to-white hover:from-yellow-300 hover:to-yellow-100 transition   p-1 font-[--font-body]   gap-2 flex justify-center items-center cursor-pointer " >
      <FaShoppingCart size={12}  />
      <span >Carrinho</span>
    </button>
}

export default ButtonCar