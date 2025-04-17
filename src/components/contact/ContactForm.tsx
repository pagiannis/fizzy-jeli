import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string(),
});

type ContactFormData = z.infer<typeof schema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="flex items-center justify-center p-4 font-serif">
      <div className="w-full max-w-2xl">
        <div className="bg-purple-200 rounded-2xl shadow-md overflow-hidden select-none drag-none p-10">
          {/* Form Header */}
          <div className="p-6 text-center">
            <h2 className="text-4xl font-bold text-pink-400 font-chewy mb-6 text-center">
              CONTUCT US
            </h2>
          </div>

          <form
            className="space-y-5"
            onSubmit={handleSubmit((data) => {
              onSubmit(data);
              reset();
            })}
          >
            {/* Name Input */}
            <div className="space-y-1">
              <label className="block text-md font-medium text-pink-500 ml-4">
                Name
              </label>
              <input
                {...register("name")}
                id="name"
                type="text"
                className="text-pink-500 w-full px-4 py-2 border border-pink-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500 ml-4">{errors.name.message}</p>
              )}
            </div>

            {/* Subject Input */}
            <div className="space-y-1">
              <label className="block text-md font-medium text-pink-500 ml-4">
                Subject
              </label>
              <input
                {...register("subject")}
                id="subject"
                type="text"
                className="text-pink-500 w-full px-4 py-2 border border-pink-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Subject"
              />
              {errors.subject && (
                <p className="text-red-500 ml-4">{errors.subject.message}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="space-y-1">
              <label className="block text-md font-medium text-pink-500 ml-4">
                Email
              </label>
              <input
                {...register("email")}
                id="email"
                type="email"
                className="text-pink-500 w-full px-4 py-2 border border-pink-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 ml-4">{errors.email.message}</p>
              )}
            </div>

            {/* Textarea for message*/}
            <div className="space-y-1">
              <label className="block text-md font-medium text-pink-500 ml-4">
                Message
              </label>
              <textarea
                {...register("message")}
                id="message"
                rows={4}
                className="text-pink-500 w-full px-4 py-2 border border-pink-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Message"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 ml-4">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-5 w-full py-2 px-4 bg-white hover:bg-gray-50 text-pink-400 font-bold rounded-lg transition-colors shadow-md cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
