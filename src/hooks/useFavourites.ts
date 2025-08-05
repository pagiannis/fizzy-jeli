import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Product } from "./useProduct";
import { useAuth } from "../contexts/AuthContext";

const useFavourites = () => {
  const { user } = useAuth();
  const userId = user?._id;

  return useQuery<Product[], Error>({
    queryKey: ["favourites", "user", userId],
    queryFn: () => 
      apiClient
        .get<Product[]>(`/favourites/user/${userId}`)
        .then((res) => res.data),
    enabled: !!userId
    });
}

export default useFavourites;
