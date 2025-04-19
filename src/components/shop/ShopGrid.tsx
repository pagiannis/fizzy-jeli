import useProducts from "../../hooks/useProducts";
import ProductCard from "../shop/ProductCard";
import ErrorMessage from "../ui/ErrorMessage";

const ShopGrid = () => {
  const { products, error } = useProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8 sm:p-3 md:p-10 lg:p-6 xl:p-15">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
      <ErrorMessage error={error} />
    </div>
  );
};

export default ShopGrid;
