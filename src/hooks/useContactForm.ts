import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "../schemas/contactForm.schema";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export const useContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const mutation = useMutation({
    mutationFn: (data: ContactFormData) => 
      apiClient.post("/contactform", data),
    onSuccess: () => {
      form.reset();
    },
    onError: (error) => {
      console.error("Submission failed:", error);
      // Optional: Show error toast
    }
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return {
    ...form,
    onSubmit,
    isSubmitting: mutation.isPending,
  };
};