import { ReactNode } from "react";

type StatusMessageProps = {
  type: "error" | "success";
  title: string;
  message: ReactNode;
  className?: string;
};

const StatusMessage = ({
  type,
  title,
  message,
  className = "",
}: StatusMessageProps) => {
  const styles = {
    error: "bg-red-100 border-red-400 text-red-700",
    success: "bg-green-100 border-green-400 text-green-700",
  };

  return (
    <div
      className={`border px-4 py-3 rounded-xl relative mb-4 font-serif text-center select-none drag-none mt-5 mx-11 ${styles[type]} ${className}`}
    >
      <strong className="font-bold">{title}</strong>
      <span className="block">{message}</span>
    </div>
  );
};

type ErrorMessageProps = {
  message?: string;
  className?: string;
};

export const ErrorMessage = ({ message, className }: ErrorMessageProps) => (
  <StatusMessage
    type="error"
    title="Error!"
    message={message || "An error occurred"}
    className={className}
  />
);

export const SuccessMessage = ({ className }: { className?: string }) => (
  <StatusMessage
    type="success"
    title="Success!"
    message="Your message has been sent successfully!"
    className={className}
  />
);
