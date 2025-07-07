import useProducts from "../../hooks/useProducts";
import ProductCard from "../shop/ProductCard";
import ErrorMessage from "../ui/ErrorMessage";
import LoadingSpinner from "../ui/LoadingSpinner";

const ShopGrid = () => {
  const { data: products, error, isLoading } = useProducts();

  if (isLoading) return <LoadingSpinner size="large"/>;
  if (error) return <ErrorMessage error={error.message} />;

  return (
    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8 sm:p-3 md:p-10 lg:p-6 xl:p-15">
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ShopGrid;
