import LogoVca from "../../../assets/img/logo-vca.png"
import ButtonCar from "./ButtonCar";

function Header() {
  return (
    <div className="header-pg">
        <div><img src={LogoVca} alt="Logo do time vôlei clube araruama"  className="logo-vca"/></div>
        <div><ButtonCar></ButtonCar></div>
    </div>
  ) 
}

export default Header;
