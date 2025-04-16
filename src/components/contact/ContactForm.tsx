import { useRef } from "react";

const ContactForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const formData = {
    name: "",
    subject: "",
    email: "",
    message: "",
  };

  const hangleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) {
      formData.name = nameRef.current.value;
    }
    if (subjectRef.current !== null) {
      formData.subject = subjectRef.current.value;
    }
    if (emailRef.current !== null) {
      formData.email = emailRef.current.value;
    }
    if (messageRef.current !== null) {
      formData.message = messageRef.current.value;
    }
    console.log(formData);

    // Reset form fields
    
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex items-center justify-center p-4 font-serif">
      <div className="w-full max-w-2xl">
        <div className="bg-purple-200 rounded-2xl shadow-md overflow-hidden select-none drag-none p-10">
          {/* Form Header */}
          <div className="p-6 text-center">
            <h2 className="text-4xl font-bold text-pink-400 font-chewy mb-6 text-center">
              CONTUCT US
            </h2>
          </div>

          <form className="space-y-5" onSubmit={hangleSubmit}>
            {/* Name Input */}
            <div className="space-y-1">
              <label className="block text-md font-medium text-pink-500 ml-4">
                Name
              </label>
              <input
                ref={nameRef}
                id="name"
                type="text"
                className="text-pink-500 w-full px-4 py-2 border border-pink-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Name"
              />
            </div>

            {/* Subject Input */}
            <div className="space-y-1">
              <label className="block text-md font-medium text-pink-500 ml-4">
                Subject
              </label>
              <input
                ref={subjectRef}
                id="subject"
                type="text"
                className="text-pink-500 w-full px-4 py-2 border border-pink-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Subject"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-1">
              <label className="block text-md font-medium text-pink-500 ml-4">
                Email
              </label>
              <input
                ref={emailRef}
                id="email"
                type="email"
                className="text-pink-500 w-full px-4 py-2 border border-pink-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Email"
              />
            </div>

            {/* Textarea for message*/}
            <div className="space-y-1">
              <label className="block text-md font-medium text-pink-500 ml-4">
                Message
              </label>
              <textarea
                ref={messageRef}
                id="message"
                rows={4}
                className="text-pink-500 w-full px-4 py-2 border border-pink-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="Message"
              ></textarea>
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
