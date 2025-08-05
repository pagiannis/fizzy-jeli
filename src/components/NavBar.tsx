import "@fortawesome/fontawesome-free/css/all.min.css";
import Logo from "../assets/FizzyJeliLogo.png";
import {
  PiUserCircleFill,
  PiHeartStraightFill,
  PiShoppingCartSimpleFill,
} from "react-icons/pi";
import { TiThMenu } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import AuthModal, { AuthModalHandle } from "./auth/AuthModal";
import { useAuth } from "../contexts/AuthContext";
import UserDropdown from "./auth/UserDropdown";

interface Props {
  onMenuClick: () => void;
}

const NavBar = ({ onMenuClick }: Props) => {
  const authModal = useRef<AuthModalHandle>(null);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-sky-300 p-3 flex justify-between items-center">
        <div className="order-1 tems-center">
          <button
            onClick={onMenuClick}
            className="text-pink-100 pr-4 cursor-pointer hover:text-pink-400 select-none drag-none"
          >
            <TiThMenu className="block sm:hidden pl-2 sm:pl-4" size={40} />
            <span className="hidden sm:block text-4xl pl-8 font-chewy">
              MENU
            </span>
          </button>
        </div>
        <div className="order-2">
          <Link to="/">
            <img
              src={Logo}
              alt="Fizzy Jeli Logo"
              className="h-15 sm:h-25 xl:h-30 hidden sm:block select-none drag-none"
            />
          </Link>
        </div>
        <div className="order-3 items-center space-x-2 sm:space-x-4 select-none drag-none">
          {isAuthenticated ? (
            <UserDropdown />
          ) : (
            <button
              className="text-2xl text-pink-100 cursor-pointer hover:text-pink-400"
              onClick={() => {
                authModal.current?.open("login");
              }}
            >
              <PiUserCircleFill size={34} />
            </button>
          )}

          <button
            className="text-2xl text-pink-100 cursor-pointer hover:text-pink-400"
            onClick={() =>
              isAuthenticated
                ? navigate("/favourites")
                : authModal.current?.open("login")
            }
          >
            <PiHeartStraightFill size={34} />
          </button>
          <button className="text-pink-100 cursor-pointer hover:text-pink-400 pr-2 sm:pr-4 md:pr-6 lg:pr-8">
            <PiShoppingCartSimpleFill size={34} />
          </button>
        </div>
      </nav>

      <AuthModal ref={authModal} />

      {/* Background for the menu button */}
    </>
  );
};

export default NavBar;
