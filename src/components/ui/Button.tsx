import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`mt-5 w-full py-2 px-4 bg-white hover:bg-gray-50 text-pink-400 font-bold rounded-lg transition-colors shadow-md cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
