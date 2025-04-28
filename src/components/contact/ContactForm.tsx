import { useContactForm } from "../../hooks/useContactForm";
import { useEffect } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Textarea from "../ui/Textarea";
import { ErrorMessage, SuccessMessage } from "../ui/StatusMessage";
import { CardContainer } from "../ui/CardContainer";

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
      {isError && <ErrorMessage message={error?.message} />}
      {isSuccess && <SuccessMessage />}

      <CardContainer title="CONTACT" width={3}>
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Name"
            type="text"
            {...register("name")}
            error={errors.name}
            placeholder="Name"
          />

          <Input
            label="Subject"
            type="text"
            {...register("subject")}
            error={errors.subject}
            placeholder="Subject"
          />

          <Input
            label="Email"
            type="text"
            {...register("email")}
            error={errors.email}
            placeholder="Email"
          />

          <Textarea
            label="Message"
            {...register("message")}
            error={errors.message}
            placeholder="Message"
            rows={4}
          />

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </form>
      </CardContainer>
    </>
  );
};

export default ContactForm;
