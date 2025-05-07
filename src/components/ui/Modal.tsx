import { ReactNode, useEffect } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: Props) => {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center select-none drag-none">
      {/* Backdrop with smooth transition */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-none transition-opacity duration-300 ease-in-out"
        onClick={onClose}
      />

      {/* Modal content with smooth transition */}
      <div className="relative z-10 bg-white rounded-lg p-6 max-w-lg md:max-w-xl lg:max-w-3xl w-full mx-4 transform transition-all duration-300 ease-in-out opacity-0 scale-95 animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 transition-colors duration-200"
          aria-label="Close modal"
        >
          <span className="text-2xl font-light pr-3 cursor-pointer">
            &times;
          </span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
