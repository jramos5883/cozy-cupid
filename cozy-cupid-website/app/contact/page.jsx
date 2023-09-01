import { Be_Vietnam_Pro } from "next/font/google";
const bVP = Be_Vietnam_Pro({ weight: "700", subsets: ["latin"] });

import ContactForm from "../components/contactForm/contactForm.comp";

export default function Contact() {
  // Need to set up FormSubmit and decide on what to use for newsletter email collection
  return (
    <div className="flex flex-col justify-center items-center mx-auto bg-blue-200 bg-opacity-90 md-tablet:pt-96 md-tablet:h-screen md-tablet:overflow-auto">
      <ContactForm />
    </div>
  );
}
