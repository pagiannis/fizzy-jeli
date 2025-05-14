import { useState } from "react";
import { FieldError } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type InputProps = {
  label: string;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, error, type, ...props }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-1">
      <label className="block text-md font-medium text-pink-500 ml-4">
        {label}
      </label>
      <div className="relative">
        <input
          className="text-pink-500 w-full px-4 py-2 border border-pink-400 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all pr-10"
          type={type === "password" && showPassword ? "text" : type}
          {...props}
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-500 hover:text-pink-600 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FaRegEyeSlash className="h-5 w-5" />
            ) : (
              <FaRegEye className="h-5 w-5" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 ml-4">{error.message}</p>}
    </div>
  );
};

export default Input;
