export default function ContactForm() {
  return (
    <div className="mx-8 my-8 h-screen">
      <div className="flex flex-col items-center justify-center">
        <p className="text-2xl pb-4">Contact Form</p>
        <form
          target="_blank"
          action="https://formsubmit.co/45e1dbe943177426372966c2f8438520"
          method="POST"
          className="w-full max-w-2xl" // Set maximum width to limit the form width
        >
          {/* Honeypot */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false" />

          <div className="flex flex-col">
            <div className="mb-4">
              <label className="text-2xl">Name:</label>
              <input
                type="text"
                name="Name&nbsp;/&nbsp;Alias"
                className="w-full border-dashed border-4 border-sky-500 py-2 px-3 text-grey-darker focus:outline-blue input:focus"
                placeholder="Full Name / Buisness Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-2xl">Email:</label>
              <input
                type="email"
                name="Email"
                className="w-full border-dashed border-4 border-sky-500 py-2 px-3 text-grey-darker focus:outline-blue input:focus"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="mb-4">
              <label className="text-2xl">Phone Number:</label>
              <input
                type="tel"
                name="Phone&nbsp;Number"
                className="w-full border-dashed border-4 border-sky-500 py-2 px-3 text-grey-darker focus:outline-blue input:focus"
                placeholder="Phone Number (optional)"
              />
            </div>
            <div className="mb-4">
              <label className="text-2xl">Message:</label>
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
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
