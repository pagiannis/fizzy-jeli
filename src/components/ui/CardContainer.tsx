import { ReactNode } from "react";

type CardContainerProps = {
  children: ReactNode;
  title?: string;
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
      className={`flex items-center justify-center p-3 sm:p-7 lg:p-5 lg:m-10  ${className}`}
    >
      <div
        className={`w-full ${widthClasses[width as keyof typeof widthClasses]}`}
      >
        <div className="py-8 px-2 md:p-10 lg:p-15 bg-purple-200 rounded-2xl shadow-md overflow-hidden select-none drag-none">
          {title && (
            <div className="p-2 sm:p-6 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-pink-400 font-chewy mb-6 text-center">
                {title}
              </h2>
            </div>
          )}
          <div className="text-base md:text-lg">{children}</div>
        </div>
      </div>
    </div>
  );
};
