import useProducts from "../../hooks/useProducts";
import ProductCard from "../shop/ProductCard";

const ShopGrid = () => {
  const { products, error } = useProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8 sm:p-3 md:p-10 lg:p-6 xl:p-15">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
      {error && <p className="text-red-500 text-center pt-10">{error}</p>}
    </div>
  );
};

export default ShopGrid;
