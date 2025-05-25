import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/api-client";

const useVerifyEmailResend = () => {
    return useMutation({
        mutationFn: (email: string) =>
          apiClient.post('/verify-email-resend', { email }),
    });
};

export default useVerifyEmailResend