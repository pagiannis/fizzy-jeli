import Input from "../ui/Input";

interface Props {
  onSuccess: () => void;
  onSwitchToRegister: () => void;
}

const Login = ({ onSwitchToRegister }: Props) => {
  return (
    <div>
      <h2 className="text-center text-pink-400 text-2xl font-bold p-5">
        LOG IN
      </h2>

      <h1 className="text-center text-lg font-medium text-gray-500">
        Welcome back. Enter you password to continue.
      </h1>

      <form className="space-y-5 mx-10 mt-10">
        <Input label="Email" type="text" placeholder="Email" />

        <Input label="Password" type="text" placeholder="Password" />

        <button
          type="submit"
          className="mx-auto block w-fit mt-10 py-3 px-8 bg-pink-400 hover:bg-pink-500 text-white font-bold rounded-lg transition-colors shadow-md cursor-pointer"
        >
          LOG IN
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
