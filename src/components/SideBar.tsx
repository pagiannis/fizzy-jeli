import { FaTimes } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: Props) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-30 z-50 transition-opacity ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed left-0 top-0 h-full w-full sm:w-80 bg-white shadow-md transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-gray-600 p-1 cursor-pointer hover:text-black"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        {/* Sidebar Menu */}
        <nav className="mt-10 space-y-4 text-lg">
          <a href="#" className="block p-4 hover:bg-gray-200">
            HOME
          </a>
          <a href="#" className="block p-4 hover:bg-gray-200">
            SHOP
          </a>
          <a href="#" className="block p-4 hover:bg-gray-200">
            ABOUT
          </a>
          <a href="#" className="block p-4 hover:bg-gray-200">
            CONTACT
          </a>
          <a href="#" className="block p-4 hover:bg-gray-200">
            FAQ
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
