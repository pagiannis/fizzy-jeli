import { FaBars } from "react-icons/fa";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Logo from "../assets/FizzyJeliLogo.png";

interface Props {
  onMenuClick: () => void;
}

const NavBar = ({ onMenuClick }: Props) => {
  return (
    <nav className="bg-sky-300 shadow-md p-3 flex justify-between items-center">
      <div className="flex tems-center">
        <button
          onClick={onMenuClick}
          className="text-2xl text-gray-600 pr-4 pl-4 cursor-pointer"
        >
          <FaBars />
        </button>
        <img src={Logo} alt="Fizzy Jeli Logo" className="h-10 pl-2" />
      </div>
      <div>
        <div className="flex items-center space-x-6">
          <button className="text-2xl text-gray-600 cursor-pointer hover:text-black">
            <i className="fas fa-user"></i>
          </button>
          <span className="absolute left-1/2 -translate-x-1/2 -top-10 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity">
            User
          </span>
          <button className="text-2xl text-gray-600 cursor-pointer hover:text-black">
            <i className="fas fa-heart"></i>
          </button>
          <button className="text-2xl text-gray-600 cursor-pointer hover:text-black pr-3">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
