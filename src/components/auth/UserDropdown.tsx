import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";

const UserDropdown = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate("/");
  };

  return (
    <div className="relative inline-block text-left " ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-10 h-10 text-white bg-pink-500 rounded-full hover:bg-pink-400 cursor-pointer"
      >
        <PiUserCircleFill size={34} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-3 text-sm text-gray-700 border-b border-gray-100">
            {isAuthenticated ? (
              <p>Hello, {user?.username}</p>
            ) : (
              <p>Welcome, guest!</p>
            )}
          </div>
          <div className="flex flex-col p-2">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => {
                    navigate("/account");
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 text-left text-gray-700 hover:bg-sky-100 rounded cursor-pointer"
                >
                  My Account
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-left text-pink-600 hover:bg-sky-100 rounded cursor-pointer"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate("/login");
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    navigate("/register");
                    setIsOpen(false);
                  }}
                  className="px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
