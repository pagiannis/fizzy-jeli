import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ShopGrid = () => {
  const { products, error } = useProducts();

  return (
    <div className="grid grid-clos-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
      {error && <p className="text-red-500 text-center pt-10">{error}</p>}
    </div>
  );
};

export default ShopGrid;
