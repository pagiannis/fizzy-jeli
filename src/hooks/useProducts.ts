import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./useProduct";

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