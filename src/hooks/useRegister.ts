import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterFormData} from "../schemas/register.schema";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { useAuth } from "../contexts/AuthContext";

interface UseRegisterOptions {
  onSuccess?: () => void;  // Make it optional with ?
}

export const useRegister = ({ onSuccess }: UseRegisterOptions = {}) => {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
  });

  const { login } = useAuth();

  const mutation = useMutation({
    mutationFn: async (data: RegisterFormData) => {
      const { confirmPassword, ...registrationData } = data;

      const res =  await apiClient.post("/users", registrationData);
      console.log("Registration response:", res);

      const token = res.headers['x-auth-token'];
      const user = res.data;
      
      if (!token || !user) {
        throw new Error("Registration succeeded but token or user data is missing.");
      }

      login(token, user);

      return user;
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

  const onSubmit = (data: RegisterFormData) => {
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