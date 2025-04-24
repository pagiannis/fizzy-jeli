import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "../schemas/contactForm.schema";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export const useContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const mutation = useMutation<ContactFormData, Error, ContactFormData>({
    mutationFn: (data: ContactFormData) => 
      apiClient
        .post("/contactform", data)
        .then((res) => res.data),
    onSuccess: () => {
      form.reset();
      
    }
  });

  const onSubmit = (data: ContactFormData) => {
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