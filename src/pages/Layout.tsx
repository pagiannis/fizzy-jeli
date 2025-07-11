import { useEffect, useRef, useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import CustomToast from "../components/ui/CustomToast";
import AuthModal, { AuthModalHandle } from "../components/auth/AuthModal";

const App = () => {
  const authModal = useRef<AuthModalHandle>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const status = searchParams.get("status");
    const resetToken = searchParams.get("resetToken");

    // Handle email verification status
    if (status) {
      switch (status) {
        case "success":
          toast.custom((t) => (
            <CustomToast
              t={t}
              message="Email verified successfully! Please login."
              type="success"
            />
          ));
          authModal.current?.open("login");

          break;
        case "already":
          toast.custom((t) => (
            <CustomToast
              t={t}
              message="Email already verified! Please login."
              type="info"
            />
          ));
          authModal.current?.open("login");

          break;
        case "error":
          toast.custom((t) => (
            <CustomToast
              t={t}
              message="Email verification failed!"
              type="error"
            />
          ));
          break;
        default:
          break;
      }

      navigate("/", { replace: true });
    }

    // Handle password reset token
    if (resetToken) {
      sessionStorage.setItem("reset-token", resetToken);
      sessionStorage.setItem("show-reset-modal", "true");

      navigate("/", { replace: true }); // Hide token from URL
    }
  }, []);

  // Automatically open forgot-password modal if needed
  useEffect(() => {
    const showResetModal =
      sessionStorage.getItem("show-reset-modal") === "true";

    if (showResetModal) {
      authModal.current?.open("reset-password");
      sessionStorage.setItem("show-reset-modal", "false");
    }
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen bg-sky-300">
        {/* Navbar */}
        <NavBar onMenuClick={() => setMenuOpen(!menuOpen)} />

        {/* Sidebar */}
        <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        {/* Main Content */}
        <Outlet />
        {/* Footer */}
        <Footer />
      </div>

      <AuthModal ref={authModal} />
    </>
  );
};

export default App;
