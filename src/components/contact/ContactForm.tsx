import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Textarea from "../ui/Textarea";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters" }),
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
    <div className="flex items-center justify-center p-10 font-serif">
      <div className="w-full max-w-2xl">
        <div className="bg-purple-200 rounded-2xl shadow-md overflow-hidden select-none drag-none p-10">
          {/* Form Header */}
          <div className="p-6 text-center">
            <h2 className="text-4xl font-bold text-pink-400 font-chewy mb-6 text-center">
              CONTACT US
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
            <Input
              label="Name"
              type="text"
              {...register("name")}
              error={errors.name}
              placeholder="Name"
            />

            {/* Subject Input */}
            <Input
              label="Subject"
              type="text"
              {...register("subject")}
              error={errors.subject}
              placeholder="Subject"
            />

            {/* Email Input */}
            <Input
              label="Email"
              type="email"
              {...register("email")}
              error={errors.email}
              placeholder="Email"
            />

            {/* Textarea for message*/}
            <Textarea
              label="Message"
              {...register("message")}
              error={errors.message}
              placeholder="Message"
              rows={4}
            />

            {/* Submit Button */}
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
