import { FaShoppingCart } from "react-icons/fa"

function ButtonCar() {
    return <button  className="bg-yellow-500 transition hover:bg-yellow-400" style={{
      color:"black",
      fontFamily: "--font-body",
      border: "none",
      borderRadius: "8px",
      padding: "5px 10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
      <FaShoppingCart size={12} color="#000" />
      <span >Carrinho</span>
    </button>
}

export default ButtonCar