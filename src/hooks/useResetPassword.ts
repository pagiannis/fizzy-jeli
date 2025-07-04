import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/api-client";

export const useSendResetCode = () => {
    return useMutation({
        mutationFn: (email: string) => {
            return apiClient.post('/forgot-password/request-reset-code', { email });
        }
    });
}