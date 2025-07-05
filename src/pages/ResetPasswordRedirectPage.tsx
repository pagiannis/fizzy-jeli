import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ResetPasswordRedirect = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get("token");
    if (token) {
      sessionStorage.setItem("reset-token", token);
      sessionStorage.setItem("show-reset-modal", "true");

      // Redirect to root without the token in the URL
      navigate("/", { replace: true });
    }
  }, [params, navigate]);

  return null;
};

export default ResetPasswordRedirect;
