import useProducts from "../hooks/useProducts";

const ShopGrid = () => {
  const { products, error } = useProducts();

  return (
    <ul>
      {products.map((product) => (
        <li key={product._id} className="p-4">
          <h2 className="text-xl font-bold">{product.name}</h2>
        </li>
      ))}
      {error && <p className="text-red-500 text-center pt-10">{error}</p>}
    </ul>
  );
};

export default ShopGrid;
