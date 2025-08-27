import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { useAuth } from "../contexts/AuthContext";

const useToggleFavourite = () => {
  const { user } = useAuth();
  const userId = user?._id;
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId: string) => {
      return apiClient
        .patch(`/toggle-favourite/${productId}/user/${userId}`) // your backend should use auth, so userId may not even be required here
        .then((res) => res.data);
    },
    onSuccess: () => {
      // Invalidate cache so favourites refetch
      queryClient.invalidateQueries({ queryKey: ["favourites", "user", userId] });
    },
  });
};

export default useToggleFavourite;
