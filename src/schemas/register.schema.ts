import { z } from "zod";

export const RegisterSchema = z.object({
  username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(40, "Username must be at most 40 characters"),
  
  email: z.string()
    .email("Invalid email address")
    .min(5, "Email must be at least 5 characters")
    .max(255, "Email must be at most 255 characters"),
    
  password: z.string()
    .min(5, "Password must be at least 5 characters long")
    .max(30, "Password must be at most 30 characters long")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character"),
    
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

export type RegisterFormData = z.infer<typeof RegisterSchema>;