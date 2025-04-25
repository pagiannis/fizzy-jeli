import { useContactForm } from "../../hooks/useContactForm";
import { useEffect } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Textarea from "../ui/Textarea";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
    isError,
    error,
    isSuccess,
  } = useContactForm();

  useEffect(() => {
    if (isSubmitting) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [isSubmitting]);

  return (
    <>
      {/* Error Message */}
      {isError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl relative mb-4 font-serif text-center select-none drag-none mt-5 ml-11 mr-11">
          <strong className="font-bold">Error!</strong>
          <span className="block">{error?.message}</span>
        </div>
      )}

      {/* Success Message */}
      {isSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl relative mb-4 font-serif text-center select-none drag-none mt-5 ml-11 mr-11">
          <strong className="font-bold">Success!</strong>
          <span className="block">
            Your message has been sent successfully!
          </span>
        </div>
      )}

      {/* Contact Form Container */}
      <div className="flex items-center justify-center p-10 font-serif">
        <div className="w-full max-w-2xl">
          <div className="bg-purple-200 rounded-2xl shadow-md overflow-hidden select-none drag-none p-10">
            {/* Form Header */}
            <div className="p-6 text-center">
              <h2 className="text-4xl font-bold text-pink-400 font-chewy mb-6 text-center">
                CONTACT US
              </h2>
            </div>

            {/* Contact Form */}
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
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
                type="text"
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
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
