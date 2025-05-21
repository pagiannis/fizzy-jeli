import { useRegister } from "../../hooks/useRegister";
import Input from "../ui/Input";

interface Props {
  onSuccess: (email: string) => void;
  onSwitchToLogin: () => void; // For switching to login view
}

const Register = ({ onSuccess, onSwitchToLogin }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useRegister({ onSuccess });

  return (
    <div>
      <h2 className="text-center text-pink-400 text-2xl font-bold p-5">
        CREATE AN ACCOUNT
      </h2>

      <h1 className="text-center text-lg font-medium text-gray-500">
        Looks like you're new here, we need a little more info:
      </h1>

      <form className="space-y-5 mx-10 mt-10" onSubmit={handleSubmit}>
        <Input
          label="Username"
          type="text"
          placeholder="Username"
          {...register("username")}
          error={errors.username}
        />

        <Input
          label="Email"
          type="text"
          placeholder="Email"
          {...register("email")}
          error={errors.email}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Password"
          {...register("password")}
          error={errors.password}
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
          error={errors.confirmPassword}
        />

        {errors.root && (
          <p className="text-red-500 text-sm">{errors.root.message}</p>
        )}

        <button
          type="submit"
          className="mx-auto block w-fit mt-10 py-3 px-8 bg-pink-400 hover:bg-pink-500 text-white font-bold rounded-lg transition-colors shadow-md cursor-pointer"
        >
          {isSubmitting ? "Registering..." : "REGISTER"}
        </button>
      </form>

      <div className="text-center text-md font-medium text-gray-500 pt-20 pb-4">
        <span>Already have an account? </span>
        <button
          onClick={onSwitchToLogin}
          className="text-pink-400 font-bold underline ml-2 cursor-pointer"
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default Register;
