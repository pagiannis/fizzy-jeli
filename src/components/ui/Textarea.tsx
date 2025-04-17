import { FieldError } from "react-hook-form";

type TextAreaProps = {
  label: string;
  error?: FieldError;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({ label, error, ...props }: TextAreaProps) => {
  return (
    <div className="space-y-1">
      <label className="block text-md font-medium text-pink-500 ml-4">
        {label}
      </label>
      <textarea
        className="text-pink-500 w-full px-4 py-2 border border-pink-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        {...props}
      />
      {error && <p className="text-red-500 ml-4">{error.message}</p>}
    </div>
  );
};
export default Textarea;
