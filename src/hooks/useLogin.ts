import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema, LoginFormData} from "../schemas/login.schema";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { useAuth } from "../contexts/AuthContext";


interface UseLoginOptions {
  onSuccess?: () => void;  // Make it optional with ?
}

export const useLogin = ({ onSuccess }: UseLoginOptions = {}) => {
  const { login } = useAuth();

  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: LoginFormData) => {
      try{
        const res = await apiClient.post("/auth", data);
        const { token, user } = res.data;

        if (token && user) {
          login(token, user);
          return user;
        }

        throw new Error("Login succeeded but token or user data is missing.");
      } 
      catch (err: any){
        const message =
        typeof err.response?.data === "string"
          ? err.response.data
          : err.response?.data?.message || "Login failed. Please try again.";
  
      throw new Error(message);
      }
    },
    onSuccess: () => {
      form.reset();
      onSuccess?.(); // Call the success callback
    },
    onError: (error) => {
      // Set form error if needed
      form.setError("root", { message: error.message });
    }
  });

  const onSubmit = (data: LoginFormData) => {
    mutation.mutate(data);
  };

  return {
    ...form,
    onSubmit,
    isSubmitting: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};