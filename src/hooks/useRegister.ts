import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema, RegisterFormData} from "../schemas/register.schema";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/api-client";

interface UseRegisterOptions {
  onSuccess?: () => void;  // Make it optional with ?
}

export const useRegister = ({ onSuccess }: UseRegisterOptions = {}) => {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: RegisterFormData) => 
      apiClient.post("/users", { 
        username: data.username,
        email: data.email,
        password: data.password
    })
        .then(res => res.data)
        .catch(err => {
            if (typeof err.response?.data === 'string') {
                throw new Error(err.response.data);
              }
              throw new Error("Registration failed. Please try again.");
            }),
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