import { z } from "zod";

export const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(5, "Password must be at least 5 characters long")
    .max(30, "Password must be at most 30 characters long")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^a-zA-Z0-9]/, "Password must contain at least one special character"),
});

export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;