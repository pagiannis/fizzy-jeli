import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;