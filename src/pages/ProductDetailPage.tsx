import { useParams } from "react-router-dom";
import apiClient from "../services/api-client";
import { Product } from "../hooks/useProducts";
import { useQuery } from "@tanstack/react-query";

const ProductDetailPage = () => {
  const { productId } = useParams();

  if (!productId) {
    return <div>Error: Product ID not found in URL</div>;
  }

  const fetchProduct = async () => {
    try {
      const response = await apiClient.get<Product>(`/products/${productId}`);
      return response.data;
    } catch (err) {
      throw new Error("Failed to fetch product");
    }
  };

  const { data: product } = useQuery<Product, Error>({
    queryKey: ["products", productId],
    queryFn: fetchProduct,
    staleTime: 1 * 60 * 1000,
  });

  return <div className="flex-1">{product?.name}</div>;
};

export default ProductDetailPage;
