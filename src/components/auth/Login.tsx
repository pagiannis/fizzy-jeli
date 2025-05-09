import Input from "../ui/Input";
import { useLogin } from "../../hooks/useLogin";
import { useEffect } from "react";

interface Props {
  onSuccess: () => void;
  onSwitchToRegister: () => void;
}

const Login = ({ onSuccess, onSwitchToRegister }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
    isSuccess,
  } = useLogin({ onSuccess });

  useEffect(() => {
    if (isSuccess) {
      onSuccess(); // Redirect or show success message
    }
  }, [isSuccess, onSuccess]);

  return (
    <div>
      <h2 className="text-center text-pink-400 text-2xl font-bold p-5">
        LOG IN
      </h2>

      <h1 className="text-center text-lg font-medium text-gray-500">
        Welcome back. Enter you password to continue.
      </h1>

      <form className="space-y-5 mx-10 mt-10" onSubmit={handleSubmit(onSubmit)}>
        {errors.root && (
          <p className="text-red-500 text-center mb-4">{errors.root.message}</p>
        )}

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

        <button
          type="submit"
          className="mx-auto block w-fit mt-10 py-3 px-8 bg-pink-400 hover:bg-pink-500 text-white font-bold rounded-lg transition-colors shadow-md cursor-pointer"
        >
          {isSubmitting ? "Logging in..." : "LOG IN"}
        </button>
      </form>

      <div className="text-center text-md font-medium text-gray-500 pt-20 pb-4">
        <span>New to Fizzy Jeli?</span>
        <button
          onClick={onSwitchToRegister}
          className="text-pink-400 font-bold underline ml-2 cursor-pointer"
        >
          REGISTER NOW
        </button>
      </div>
    </div>
  );
};

export default Login;
