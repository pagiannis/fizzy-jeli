import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .email("Invalid email address"),
    
  password: z
    .string()
});

export type LoginFormData = z.infer<typeof LoginSchema>;