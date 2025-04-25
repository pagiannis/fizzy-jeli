import { ReactNode } from "react";

type CardContainerProps = {
  children: ReactNode;
  title: string;
  className?: string;
};

export const CardContainer = ({
  children,
  title,
  className = "",
}: CardContainerProps) => (
  <div
    className={`flex items-center justify-center p-10 font-serif ${className}`}
  >
    <div className="w-full max-w-2xl">
      <div className="bg-purple-200 rounded-2xl shadow-md overflow-hidden select-none drag-none p-10">
        <div className="p-6 text-center">
          <h2 className="text-4xl font-bold text-pink-400 font-chewy mb-6 text-center">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </div>
  </div>
);
