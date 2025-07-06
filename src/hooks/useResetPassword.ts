import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export const useSendResetCode = () => {
    return useMutation({
        mutationFn: (email: string) => {
            return apiClient.post('/forgot-password/request-reset-code', { email });
        }
    });
}

export const useResetPassword = () => {
    return useMutation({
        mutationFn: (data: { newPassword: string; token: string }) => {
            return apiClient.patch('/forgot-password/reset-password', data);
        }
    });
};