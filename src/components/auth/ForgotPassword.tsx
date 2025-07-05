import toast from "react-hot-toast";
import Input from "../ui/Input";
import { useForm } from "react-hook-form";
import { useSendResetCode } from "../../hooks/useResetPassword";
import {
  ForgotPasswordFormData,
  forgotPasswordSchema,
} from "../../schemas/forgotPassword.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const ForgotPassword = () => {
  const { mutateAsync: sendResetCode, isPending } = useSendResetCode();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      await sendResetCode(data.email);
      toast.success("Verification code sent!");
    } catch (err: any) {
      toast.error(err.message || "Failed to send code");
    }
  };

  return (
    <form className="space-y-5 mx-10 mt-10" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-lg font-medium text-gray-500">
        We'll send an email to verify your account.
      </h1>
      <Input
        label="Email"
        type="text"
        placeholder="Email"
        {...register("email")}
        error={errors.email}
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
