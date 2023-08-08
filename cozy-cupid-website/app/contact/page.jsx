import ContactForm from "../components/contactForm/contactForm.comp";

export default function Contact() {
  // Need to set up FormSubmit and decide on what to use for newsletter email collection
  return (
    <div className="flex flex-col justify-center items-center mx-auto bg-blue-200">
      <ContactForm />
    </div>
  );
}
