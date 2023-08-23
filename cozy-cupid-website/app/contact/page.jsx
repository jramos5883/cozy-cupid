import { Be_Vietnam_Pro } from "next/font/google";
const bVP = Be_Vietnam_Pro({ weight: "700", subsets: ["latin"] });

import ContactForm from "../components/contactForm/contactForm.comp";

export default function Contact() {
  // Need to set up FormSubmit and decide on what to use for newsletter email collection
  return (
    <div className="flex flex-col justify-center items-center mx-auto bg-blue-200 bg-opacity-90">
      <div className="flex flex-col justify-center items-center">
        <span className={`${bVP.className} pt-4 text-3xl pb-4 text-sky-700`}>
          Business Info
        </span>

        <p className="text-2xl sm-cellphone:hidden">Email: customerservice</p>
        <p className="text-2xl sm-cellphone:hidden">@cozycupid.com</p>

        <p className="flex text-center text-2xl py-2 hidden sm-cellphone:block">
          Email: customerservice@cozycupid.com
        </p>
        <p className="flex text-center text-2xl py-4">
          Address: 2160 Barranca Parkway STE 1430 Irvine, CA 92606
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
