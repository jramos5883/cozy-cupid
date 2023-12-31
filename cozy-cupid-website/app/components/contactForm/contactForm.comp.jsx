import { Be_Vietnam_Pro } from "next/font/google";
const bVP = Be_Vietnam_Pro({ weight: "700", subsets: ["latin"] });

export default function ContactForm() {
  // Check vercel deployment
  return (
    <div className="flex flex-col items-center justify-center mx-8 pt-20">
      <span className={`${bVP.className} text-3xl pb-4 text-sky-700`}>
        Contact Form
      </span>
      <form
        target="_blank"
        action="https://formsubmit.co/customerservice@cozycupid.com"
        method="POST"
        className="w-full max-w-2xl" // Set maximum width to limit the form width
      >
        {/* Honeypot */}
        <input type="text" name="_honey" style={{ display: "none" }} />

        {/* Disable Captcha */}
        <input type="hidden" name="_captcha" value="false" />

        <div className="flex flex-col">
          <div className="mb-4">
            <span className={`${bVP.className} text-2xl pb-4 text-sky-700`}>
              Name:
            </span>
            <input
              type="text"
              name="Name&nbsp;/&nbsp;Alias"
              className="w-full border-dashed border-4 border-sky-500 py-2 px-3 text-grey-darker focus:outline-blue input:focus"
              placeholder="Full Name / Business Name"
              required
            />
          </div>
          <div className="mb-4">
            <span className={`${bVP.className} text-2xl pb-4 text-sky-700`}>
              Email:
            </span>
            <input
              type="email"
              name="Email"
              className="w-full border-dashed border-4 border-sky-500 py-2 px-3 text-grey-darker focus:outline-blue input:focus"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <span className={`${bVP.className} text-2xl pb-4 text-sky-700`}>
              Phone Number:
            </span>
            <input
              type="tel"
              name="Phone&nbsp;Number"
              className="w-full border-dashed border-4 border-sky-500 py-2 px-3 text-grey-darker focus:outline-blue input:focus"
              placeholder="Phone Number (optional)"
            />
          </div>
          <div className="mb-4">
            <span className={`${bVP.className} text-2xl pb-4 text-sky-700`}>
              Message:
            </span>
            <textarea
              placeholder="Your Message"
              className="w-full border-dashed border-4 border-sky-500 py-2 px-3 text-grey-darker focus:outline-blue textarea:focus"
              name="Message"
              rows="10"
              required
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="border-dashed border-4 border-sky-500 p-2 rounded-3xl hover:bg-blue-500 w-full"
        >
          <span className={`${bVP.className} text-2xl pb-4 text-sky-700`}>
            Send Message
          </span>
        </button>
      </form>
      <div>
        <div className="flex flex-col py-12">
          <span
            className={`${bVP.className} text-3xl pb-2 text-sky-700 text-center`}
          >
            Emailing List
          </span>
          <p className="py-8 max-w-xl text-xl text-center">
            Join our emailing list for future product releases and discount
            sales!
          </p>
          <div className="mb-4">
            <span className={`${bVP.className} text-2xl pb-4 text-sky-700`}>
              Email:
            </span>
            <input
              type="email"
              name="Email"
              className="w-full border-dashed border-4 border-sky-500 py-2 px-3 text-grey-darker focus:outline-blue input:focus"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="border-dashed border-4 border-sky-500 p-2 rounded-3xl hover:bg-blue-500 w-full"
            >
              <span className={`${bVP.className} text-2xl text-sky-700`}>
                Join Emailing List
              </span>
            </button>
          </div>
        </div>
      </div>
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
    </div>
  );
}
