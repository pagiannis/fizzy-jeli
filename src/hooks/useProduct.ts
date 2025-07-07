import { useParams } from "react-router-dom";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  secondaryImage?: string;
}

const useProduct = () => {
  const { productId } = useParams();

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

  return { product };
}

export default useProduct;