import LogoVca from "../../assets/img/logo-vca.png";
import ButtonCar from "../Home/components/ButtonCar";
import HeaderVca from "../../assets/img/header-vca1.png";
import { FaHome } from "react-icons/fa";

function Header() {
  return (
    <div className="flex justify-between items-center bg-[#0d0d0d] text-white pl-5 pr-5">
      <div className="flex justify-center items-center">
        <img
          src={LogoVca}
          alt="Logo do time vôlei clube araruama"
          className="w-16 h-16"
        />
        <button className="bg-yellow-500 rounded-xl text-[#0d0d0d] w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-yellow-400 ">
          <FaHome />
        </button>
      </div>

      <div>
        <img
          src={HeaderVca}
          alt="Nome volei clube araruama"
          className="w-auto h-15"
        />
      </div>
      <div>
        <ButtonCar></ButtonCar>
      </div>
    </div>
  );
}

export default Header;
