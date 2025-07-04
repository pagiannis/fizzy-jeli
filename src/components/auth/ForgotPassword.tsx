import toast from "react-hot-toast";
import Input from "../ui/Input";
import { useState } from "react";
import { useSendResetCode } from "../../hooks/useResetPassword";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { mutateAsync: sendResetCode, isPending } = useSendResetCode();

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    try {
      await sendResetCode(email);
      toast.success("Verification code sent!");
    } catch (err: any) {
      toast.error(err.message || "Failed to send code");
    }
  };

  return (
    <form className="space-y-5 mx-10 mt-10" onSubmit={handleSendCode}>
      <h1 className="text-center text-lg font-medium text-gray-500">
        Well sent an email to verify your account.
      </h1>
      <Input
        label="Email"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        disabled={isPending}
        className="mx-auto block w-fit mt-15 py-3 px-8 mb-18 bg-pink-400 hover:bg-pink-500 text-white font-bold rounded-lg transition-colors shadow-md cursor-pointer"
      >
        {isPending ? "Sending..." : "Send Reset Code"}
      </button>
    </form>
  );
};

export default ForgotPassword;
