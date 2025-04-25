import { ReactNode } from "react";

type CardContainerProps = {
  children: ReactNode;
  title: string;
  className?: string;
  width?: number;
};

export const CardContainer = ({
  children,
  title,
  className = "",
  width = 2,
}: CardContainerProps) => {
  const widthClasses = {
    1: "max-w-xl",
    2: "max-w-2xl",
    3: "max-w-3xl",
    4: "max-w-4xl",
    5: "max-w-5xl",
    6: "max-w-6xl",
    7: "max-w-7xl",
  };

  return (
    <div
      className={`flex items-center justify-center p-10 font-serif ${className}`}
    >
      <div
        className={`w-full ${widthClasses[width as keyof typeof widthClasses]}`}
      >
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
};
