// components/CustomToast.tsx
import React from "react";
import { Toast } from "react-hot-toast";

type CustomToastProps = {
  t: Toast;
  message: string;
  type: "success" | "error" | "info";
};

const bgColorMap = {
  success: "bg-green-200 text-gray-700",
  error: "bg-red-200 text-gray-700",
  info: "bg-yellow-200 text-gray-700",
};

const CustomToast: React.FC<CustomToastProps> = ({ message, type }) => {
  return (
    <div
      className={`rounded-2xl shadow-lg px-5 py-3 font-chewy text-2xl flex items-center gap-3 animate-fade-in-up ${bgColorMap[type]}`}
    >
      {type === "success" && "✅"}
      {type === "error" && "❌"}
      {type === "info" && "ℹ️"}
      <span>{message}</span>
    </div>
  );
};

export default CustomToast;
