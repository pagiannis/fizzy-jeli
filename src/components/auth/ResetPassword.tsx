import Input from "../ui/Input";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
/*import { useResetPassword } from "../../hooks/useResetPassword";*/
import {
  ResetPasswordFormData,
  resetPasswordSchema,
} from "../../schemas/resetPasssword.schema";
import { zodResolver } from "@hookform/resolvers/zod";

const ResetPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors},
    } = useForm<ResetPasswordFormData>({
        resolver: zodResolver(resetPasswordSchema),
    });

    const onSubmit = async (data: ResetPasswordFormData) => {
        try {
            // await resetPassword(data);
            toast.success("Password reset successfully!");
        } catch (err: any) {
            toast.error(err.message || "Failed to reset password");
        }
    };

    return (
    <form className="space-y-5 mx-10 mt-10" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-lg font-medium text-gray-500">
        Please enter your new password.
      </h1>
      <Input
        label="Password"
        type="password"
        placeholder="Password"
        {...register("password")}
        error={errors.password}
      />
      <button
        type="submit"
        /*disabled={isPending}*/
        className="mx-auto block w-fit mt-15 py-3 px-8 mb-18 bg-pink-400 hover:bg-pink-500 text-white font-bold rounded-lg transition-colors shadow-md cursor-pointer"
      >
        {true ? "Changing..." : "Change Password"}
      </button>
    </form>
  );
};

export default ResetPassword;
