import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ShopGrid = () => {
  const { products, error } = useProducts();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-6 p-1 sm:p-2 md:p-5 lg:p-15">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
      {error && <p className="text-red-500 text-center pt-10">{error}</p>}
    </div>
  );
};

export default ShopGrid;
