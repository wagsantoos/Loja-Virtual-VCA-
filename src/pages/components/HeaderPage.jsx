import LogoVca from "../../assets/img/logo-vca.png"
import ButtonCar from "../Home/components/ButtonCar";


function Header() {
  return (
    <div className="flex justify-between items-center">
        <div><img src={LogoVca} alt="Logo do time vôlei clube araruama"  className="w-26 h-26"/></div>
        <div><ButtonCar></ButtonCar></div>
    </div>
  ) 
}

export default Header;
