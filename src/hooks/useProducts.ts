import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  secondaryImage?: string;
}

const useProducts = () => {
  const fetchProducts = async () => {
    try {
      const response = await apiClient.get<Product[]>("/products");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch products");
    }
  };
  
  const { 
    data : products, 
    error, 
    isLoading
  } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1 * 60 * 1000 // 1 minute cache
  })

  return { products, error, isLoading };
}

export default useProducts;