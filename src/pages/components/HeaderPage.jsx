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
          <button className="bg-yellow-500 rounded-xl p-1 text-[#0d0d0d]  gap-2 flex justify-center items-center cursor-pointer transition duration-300 hover:bg-yellow-400 hover:text-amber-50">
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
