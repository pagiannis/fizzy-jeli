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

  return useQuery<Product, Error>({
    queryKey: ["products", productId],
    queryFn: () =>
      apiClient
        .get<Product>(`/products/${productId}`)
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000,
  });
}

export default useProduct;