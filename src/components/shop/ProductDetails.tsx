import useProduct from "../../hooks/useProduct";
import Button from "../ui/Button";
import { CardContainer } from "../ui/CardContainer";

const ProductDetails = () => {
  const { product } = useProduct();

  return (
    <CardContainer width={7} className="p-0 m-0">
      {/* Add min-h-[500px] or similar to establish a height context */}
      <div className="flex flex-col lg:flex-row gap-8 sm:p-6 min-h-[500px]">
        {/* Left column - now properly centered */}
        <div className="lg:order-1 lg:w-1/3 flex items-center justify-center">
          <div className="font-chewy text-pink-400 text-center">
            <h1 className="text-2xl md:text-4xl">{product?.name}</h1>
            <p className="text-2xl md:text-4xl mt-2">${product?.price}</p>
          </div>
        </div>

        {/* Combined middle + right column */}
        <div className="lg:order-2 lg:w-2/3 bg-[linear-gradient(160deg,rgba(238,130,207,0.74)_0%,rgb(177,124,247)_100%)] rounded-lg flex flex-col lg:flex-row p-10">
          {/* Middle (image) */}
          <div className="lg:w-1/2 flex justify-center p-10 md:mr-15">
            <img
              src={product?.image}
              alt={product?.name}
              className="max-h-80 object-contain"
            />
          </div>

          {/* Right (description + button) */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center">
            <p className="space-y-2 font-chewy text-bold text-white text-center text-lg md:text-2xl">
              {product?.description}
            </p>
            <Button className="mt-10 font-chewy text-lg md:text-2xl">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default ProductDetails;
