import LogoVca from "../../assets/img/logo-vca.png"
import ButtonCar from "../Home/components/ButtonCar";


function Header() {
  return (
    <div className="flex justify-between items-center bg-[#0d0d0d] text-white pl-5 pr-5">
        <div><img src={LogoVca} alt="Logo do time vôlei clube araruama"  className="w-16 h-16"/></div>
        <div><ButtonCar></ButtonCar></div>
    </div>
  ) 
}

export default Header;
