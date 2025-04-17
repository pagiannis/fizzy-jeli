import { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="mt-5 w-full py-2 px-4 bg-white hover:bg-gray-50 text-pink-400 font-bold rounded-lg transition-colors shadow-md cursor-pointer"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
