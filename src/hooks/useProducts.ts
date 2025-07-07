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
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: () =>
      apiClient
        .get<Product[]>("/products")
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000 // 1 minute cache
  });
};

export default useProducts;