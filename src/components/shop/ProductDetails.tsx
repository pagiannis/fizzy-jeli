import useProduct from "../../hooks/useProduct";
import { CardContainer } from "../ui/CardContainer";

export const ProductDetails = () => {
  const { product } = useProduct();

  return (
    <CardContainer width={7} className="p-0 m-0">
      <div className="flex flex-col lg:flex-row gap-8 sm:p-6">
        {/* Left column - shows first on mobile, left on desktop */}
        <div className="lg:order-1 lg:w-1/3">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">{product?.name}</h1>
            <p className="text-2xl text-pink-500 mt-2">${product?.price}</p>
          </div>

          <button className="w-full bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-4 rounded-lg transition-colors mb-6">
            Add to Cart
          </button>
        </div>

        {/* Middle column - image (top on mobile, middle on desktop) */}
        <div className="lg:order-2 lg:w-1/3 flex justify-center">
          <img
            src={product?.image}
            alt={product?.name}
            className="max-h-80 object-contain rounded-lg"
          />
        </div>

        {/* Right column - facts (bottom on mobile, right on desktop) */}
        {/*<div className="lg:order-3 lg:w-1/3">
          <h3 className="text-xl font-semibold mb-4">Product Details</h3>
          <ul className="space-y-2">
            {product?.facts.map((fact, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-2">•</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>*/}
      </div>
    </CardContainer>
  );
};

export default ProductDetails;
