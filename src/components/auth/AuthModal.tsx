// src/components/auth/AuthModal.tsx
import { forwardRef, useImperativeHandle, useState } from "react";
import Modal from "../ui/Modal";
import Login from "./Login";
import Register from "./Register";
import EmailVerification from "./EmailVerification";

type AuthMode = "login" | "register" | "email-verification";

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
        />
      ) : mode === "register" ? (
        <Register
          onSuccess={(email) => handleRegisterSuccess(email)}
          onSwitchToLogin={() => setMode("login")}
        />
      ) : (
        <EmailVerification
          email={registeredEmail}
          onClose={() => setIsOpen(false)}
        />
      )}
    </Modal>
  );
});

AuthModal.displayName = "AuthModal";

export default AuthModal;
