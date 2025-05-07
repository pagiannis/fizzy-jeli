// src/components/auth/AuthModal.tsx
import { forwardRef, useImperativeHandle, useState } from "react";
import Modal from "../ui/Modal";
import Login from "./Login";
import Register from "./Register";

type AuthMode = "login" | "register";

export type AuthModalHandle = {
  open: (mode?: AuthMode) => void;
};

const AuthModal = forwardRef<AuthModalHandle>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<AuthMode>("login");

  useImperativeHandle(ref, () => ({
    open: (mode: AuthMode = "login") => {
      setMode(mode);
      setIsOpen(true);
    },
  }));

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      {mode === "login" ? (
        <Login
          onSuccess={() => setIsOpen(false)}
          onSwitchToRegister={() => setMode("register")}
        />
      ) : (
        <Register
          onSuccess={() => setIsOpen(false)}
          onSwitchToLogin={() => setMode("login")}
        />
      )}
    </Modal>
  );
});

AuthModal.displayName = "AuthModal";

export default AuthModal;
