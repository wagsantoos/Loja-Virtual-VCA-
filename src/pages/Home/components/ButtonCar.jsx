import { FaShoppingCart } from "react-icons/fa"

function ButtonCar() {
    return <button style={{
      backgroundColor: "#FFD700",
      border: "none",
      borderRadius: "8px",
      padding: "5px 10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
      <FaShoppingCart size={12} color="#000" />
      <span>Carrinho</span>
    </button>
}

export default ButtonCar