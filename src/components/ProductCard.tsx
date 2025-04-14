import { Product } from "../hooks/useProducts";
import { useState } from "react";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Domed background container */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-300 
                      rounded-t-full h-[70%] top-[30%] opacity-50 group-hover:opacity-30
                      transition-opacity duration-500"
      />

      {/* Product image */}
      <div className="relative z-10">
        <img
          src={
            isHovered ? product.secondaryImage || product.image : product.image
          }
          alt={product.name}
          className="w-full h-64 object-contain transition-all duration-500
                    mix-blend-multiply group-hover:mix-blend-normal"
        />
      </div>
    </div>
  );
};

export default ProductCard;
