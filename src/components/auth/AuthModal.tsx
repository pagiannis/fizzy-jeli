// src/components/auth/AuthModal.tsx
import { forwardRef, useImperativeHandle, useState } from "react";
import Modal from "../ui/Modal";
import Login from "./Login";
import Register from "./Register";
import EmailVerification from "./EmailVerification";
import ForgotPassword from "./ForgotPassword";

type AuthMode = "login" | "register" | "email-verification" | "forgot-password";

export type AuthModalHandle = {
  open: (mode?: AuthMode) => void;
};

const AuthModal = forwardRef<AuthModalHandle>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>("login");
  const [registeredEmail, setRegisteredEmail] = useState<string>("");

  useImperativeHandle(ref, () => ({
    open: (mode: AuthMode = "login") => {
      setMode(mode);
      setIsOpen(true);
    },
  }));

  const handleRegisterSuccess = (email: string) => {
    setRegisteredEmail(email);
    setMode("email-verification");
  };

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      {mode === "login" ? (
        <Login
          onSuccess={() => setIsOpen(false)}
          onSwitchToRegister={() => setMode("register")}
          onSwitchToForgotPassword={() => setMode("forgot-password")}
        />
      ) : mode === "register" ? (
        <Register
          onSuccess={(email) => handleRegisterSuccess(email)}
          onSwitchToLogin={() => setMode("login")}
        />
      ) : mode == "email-verification" ? (
        <EmailVerification
          email={registeredEmail}
          onClose={() => setIsOpen(false)}
        />
      ) : (
        <ForgotPassword />
      )}
    </Modal>
  );
});

AuthModal.displayName = "AuthModal";

export default AuthModal;
