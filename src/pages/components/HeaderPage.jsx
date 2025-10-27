import LogoVca from "../../assets/img/logo-vca.png";
import ButtonCar from "../Home/components/ButtonCar";
import HeaderVca from "../../assets/img/header-vca1.png";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between items-center bg-[#0d0d0d] text-white pl-5 pr-5">
      <div className="flex justify-center items-center">
        <img
          src={LogoVca}
          alt="Logo do time vôlei clube araruama"
          className="w-16 h-16"
        />
      </div>

      <div>
        <img
          src={HeaderVca}
          alt="Nome volei clube araruama"
          className="w-auto h-15"
        />
      </div>
      <nav className="flex items-center gap-2">
        <Link to={"/"}>
          <button  className="px-4 py-1 rounded-lg text-gray-800 font-semibold bg-gradient-to-r from-yellow-500 to-white hover:from-yellow-300 hover:to-yellow-100 transition   p-1 font-[--font-body]   gap-2 flex justify-center items-center cursor-pointer ">
            <FaHome /> 
            <span>Início</span>
          </button>
        </Link>
        <Link to={"/cart"}>
          <ButtonCar></ButtonCar>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
