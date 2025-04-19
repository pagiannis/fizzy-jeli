interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <>{error && <p className="text-red-500 text-center pt-10">{error}</p>}</>
  );
};

export default ErrorMessage;
