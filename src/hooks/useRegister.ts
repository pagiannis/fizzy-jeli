import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterFormData} from "../schemas/register.schema";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/api-client";

interface UseRegisterOptions {
  onSuccess?: (email: string) => void;  // Make it optional with ?
}

export const useRegister = ({ onSuccess }: UseRegisterOptions = {}) => {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
  });

  const mutation = useMutation({
    mutationFn: async (data: RegisterFormData) => {
      const { confirmPassword, ...registrationData } = data;
      const res =  await apiClient.post("/users", registrationData);

      return res.data;
    },
    onSuccess: (data) => {
      form.reset();
      onSuccess?.(data.email); // Call the success callback
    },
    onError: (error: any) => {
      const message =
      error.response?.data ||
      error.response?.data?.message || 
      "An unexpected error occurred.";

      // Set form error if needed
      form.setError("root", { message });
    }
  });

  return {
    register: form.register,
    handleSubmit: form.handleSubmit((data) => mutation.mutate(data)),
    formState: form.formState,
    isSubmitting: mutation.isPending,
    isSuccess: mutation.isSuccess,
    errors: form.formState.errors,
  };
};