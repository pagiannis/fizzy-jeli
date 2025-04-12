import { FaTimes } from "react-icons/fa";
import Logo from "../assets/FizzyJeliLogo.png";
import { Link } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: Props) => {
  return (
    <div
      className={`fixed inset-0 bg-sky-300 bg-opacity-30 z-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <img
        src={Logo}
        className="absolute sm:h-50 left-[calc(50%+10rem)] top-1/2 -translate-x-1/2 -translate-y-1/2 select-none cursor-default drag-none"
      ></img>
      <div
        className={`fixed left-0 top-0 h-full w-full sm:w-80 bg-pink-100 shadow-md transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-xl sm:text-3xl text-pink-400 p-1 cursor-pointer hover:text-pink-500"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        {/* Sidebar Menu */}
        <nav className="mt-10 space-y-4 text-3xl text-pink-400 font-chewy ">
          <Link
            to="/"
            className="block p-4 mt-15 pl-8 hover:bg-pink-200"
            onClick={onClose}
          >
            HOME
          </Link>
          <Link
            to="/shop"
            className="block p-4 pl-8 hover:bg-pink-200"
            onClick={onClose}
          >
            SHOP
          </Link>
          <Link
            to="/about"
            className="block p-4 pl-8 hover:bg-pink-200"
            onClick={onClose}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="block p-4 pl-8 hover:bg-pink-200"
            onClick={onClose}
          >
            CONTACT
          </Link>
          <Link
            to="/faq"
            className="block p-4 pl-8 hover:bg-pink-200"
            onClick={onClose}
          >
            FAQ
          </Link>
        </nav>

        {/* Logo appears on the bottom of menu when on phone screen */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-21 block sm:hidden">
          <img src={Logo} alt="Fizzy Jeli Logo" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
