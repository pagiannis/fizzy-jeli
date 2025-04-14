import { Product } from "../hooks/useProducts";
import { useState } from "react";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate bubbles with more visibility
  const bubbles = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    size: `${Math.random() * 16 + 8}px`,
    left: `${Math.random() * 90 + 5}%`,
    delay: `${Math.random() * 3}s`,
    duration: `${Math.random() * 4 + 3}s`,
    opacity: Math.random() * 0.4 + 0.3,
  }));

  return (
    <div
      className="relative overflow-hidden group h-full w-full bg-purple-200 rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden ">
        <div
          className="absolute -bottom-6 -left-4 w-[120%] h-[80%]"
          style={{
            background: `linear-gradient(160deg, rgba(238, 130, 207, 0.74) 0%, rgb(177, 124, 247) 100%)`,
            borderRadius: isHovered
              ? "20% 60% 45% 55% / 60% 35% 65% 40%"
              : "50% 50% 60% 40% / 55% 45% 55% 45%",
            transform: isHovered ? "translateY(6px) scaleX(1.08)" : "none",
            transition: "all 1.2s cubic-bezier(0.68, -0.55, 0.27, 1.55)",
          }}
        />
      </div>

      {/* More prominent bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white/70 backdrop-blur-[1px] pointer-events-none"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            bottom: "-15px",
            animation: `float ${bubble.duration} ease-in ${bubble.delay} infinite`,
            opacity: 0,
            boxShadow: "0 0 8px rgba(136, 0, 255, 0.5)",
          }}
        />
      ))}

      {/* Product image container */}
      <div className="cursor-pointer relative z-10 h-full flex flex-col items-center justify-center p-6">
        <img
          src={
            isHovered ? product.secondaryImage || product.image : product.image
          }
          alt={product.name}
          className="w-full h-auto max-h-72 object-contain transition-all duration-500 mix-blend-multiply group-hover:mix-blend-normal"
          style={{
            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.1))",
          }}
        />
        <p className="mt-2 text-center text-white font-chewy text-2xl">
          {product.name.toUpperCase()}
        </p>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          15% {
            opacity: ${bubbles[0]?.opacity || 0.5};
          }
          100% {
            transform: translateY(-180px) scale(0.85);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
