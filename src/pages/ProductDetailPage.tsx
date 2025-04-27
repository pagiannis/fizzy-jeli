import useProduct from "../hooks/useProduct";

const ProductDetailPage = () => {
  const { product } = useProduct();

  return <div className="flex-1">{product?.name}</div>;
};

export default ProductDetailPage;
