import useProduct from "../../hooks/useProduct";
import Button from "../ui/Button";
import { CardContainer } from "../ui/CardContainer";

const ProductDetails = () => {
  const { product } = useProduct();

  return (
    <CardContainer width={7} className="p-0 m-0">
      {/* Add min-h-[500px] or similar to establish a height context */}
      <div className="flex flex-col lg:flex-row gap-15 sm:p-6 min-h-[500px]">
        {/* Left column - now properly centered */}
        <div className="lg:order-1 lg:w-1/2 flex items-center justify-center">
          <div className="font-chewy text-pink-400 text-center">
            <h1 className="text-2xl md:text-4xl">{product?.name}</h1>
            <p className="text-2xl md:text-4xl mt-2">${product?.price}</p>
            <div className="flex justify-center items-center">
              <img
                src={product?.image}
                alt={product?.name}
                className="max-h-100 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Combined middle + right column */}
        <div className="lg:order-2 lg:order-1 lg:w-1/2  rounded-lg flex flex-col lg:flex-row p-10">
          {/* Right (description + button) */}
          <div className="flex flex-col justify-center items-center">
            <p className="order-2 space-y-2 font-chewy text-bold text-white text-center text-lg md:text-2xl bg-[linear-gradient(160deg,rgba(238,130,207,0.74)_0%,rgb(177,124,247)_100%)] p-8 rounded-lg shadow-md">
              {product?.description}
            </p>
            <Button className="order-1 lg:order-2 mt-10 font-chewy text-lg md:text-2xl">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default ProductDetails;
