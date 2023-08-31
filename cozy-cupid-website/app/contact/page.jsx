import { Be_Vietnam_Pro } from "next/font/google";
const bVP = Be_Vietnam_Pro({ weight: "700", subsets: ["latin"] });

import ContactForm from "../components/contactForm/contactForm.comp";

export default function Contact() {
  // Need to set up FormSubmit and decide on what to use for newsletter email collection
  return (
    <div className="flex flex-col justify-center items-center mx-auto bg-blue-200 bg-opacity-90 xl-desktop:pt-96 xl-desktop:h-screen xl-desktop:overflow-auto">
      <ContactForm />
    </div>
  );
}
