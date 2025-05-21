import { MdEmail } from "react-icons/md";

type Props = {
  email: string;
  onClose: () => void;
};

const EmailVerification = ({ email }: Props) => {
  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold text-pink-500 mb-10">
        Verify Your Email
      </h2>

      <div className="mb-6 text-xl">
        <p>We've sent a verification link to:</p>
        <p className="font-semibold text-xl mt-2">{email}</p>
      </div>

      <div className="text-center mb-6">
        <MdEmail className="inline-block text-4xl" />
      </div>

      <div className="space-y-4 ">
        <p className="text-gray-600 mb-23 text-lg">
          Check your inbox and click the link to verify your account.
        </p>

        <button
          /*onClick={ }*/
          /*disabled={isResending}*/
          className="text-pink-500 text-lg font-medium hover:underline flex items-center justify-center gap-2 mx-auto cursor-pointer"
        >
          Resend Verification Email
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
