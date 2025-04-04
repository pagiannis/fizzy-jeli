import "@fortawesome/fontawesome-free/css/all.min.css";
import Logo from "../assets/FizzyJeliLogo.png";
import {
  PiUserCircleFill,
  PiHeartStraightFill,
  PiShoppingCartSimpleFill,
} from "react-icons/pi";
import { TiThMenu } from "react-icons/ti";

interface Props {
  onMenuClick: () => void;
}

const NavBar = ({ onMenuClick }: Props) => {
  return (
    <nav className="bg-sky-300 p-3 flex justify-between items-center">
      <div className="order-1 tems-center">
        <button
          onClick={onMenuClick}
          className="text-pink-100 pr-4 pl-4 cursor-pointer hover:text-pink-400"
        >
          <TiThMenu className="block sm:hidden pl-2 sm:pl-4" size={40} />
          <span className="hidden sm:block text-4xl pl-4 font-chewy">MENU</span>
        </button>
      </div>
      <div className="order-2">
        <img
          src={Logo}
          alt="Fizzy Jeli Logo"
          className="h-15 sm:h-25 xl:h-30 hidden sm:block"
        />
      </div>
      <div className="order-3 items-center space-x-2 sm:space-x-5">
        <button className="text-2xl text-pink-100 cursor-pointer hover:text-pink-400">
          <PiUserCircleFill size={35} />
        </button>
        <button className="text-2xl text-pink-100 cursor-pointer hover:text-pink-400">
          <PiHeartStraightFill size={35} />
        </button>
        <button className="text-pink-100 cursor-pointer hover:text-pink-400 pr-3">
          <PiShoppingCartSimpleFill size={35} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
