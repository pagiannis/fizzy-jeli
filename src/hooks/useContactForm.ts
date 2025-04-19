import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "../schemas/contactForm.schema";

export const useContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data); // Replace with API call
  };

  return {
    ...form,
    onSubmit,
  };
};