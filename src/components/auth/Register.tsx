import Input from "../ui/Input";

interface Props {
  onSuccess: () => void; // Called after successful registration
  onSwitchToLogin: () => void; // For switching to login view
}

const Register = ({ onSwitchToLogin }: Props) => {
  return (
    <div>
      <h2 className="text-center text-pink-400 text-2xl font-bold p-5">
        CREATE AN ACCOUNT
      </h2>

      <h1 className="text-center text-lg font-medium text-gray-500">
        Looks like you're new here, we need a little more info:
      </h1>

      <form className="space-y-5 mx-10 mt-10">
        <Input label="Username" type="text" placeholder="Username" />

        <Input label="Email" type="text" placeholder="Email" />

        <Input label="Password" type="text" placeholder="Password" />

        <Input
          label="Confirm Password"
          type="text"
          placeholder="Confirm Password"
        />

        <button
          type="submit"
          className="mx-auto block w-fit mt-10 py-3 px-8 bg-pink-400 hover:bg-pink-500 text-white font-bold rounded-lg transition-colors shadow-md cursor-pointer"
        >
          REGISTER
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
