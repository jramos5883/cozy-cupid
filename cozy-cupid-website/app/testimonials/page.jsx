import Image from "next/image";
import { Be_Vietnam_Pro } from "next/font/google";
const bVP = Be_Vietnam_Pro({ weight: "700", subsets: ["latin"] });

export default function Testimonials() {
  return (
    // Need to check on Testimonials view on tablets
    <div className="flex flex-col justify-center items-center mx-auto bg-blue-200 bg-opacity-90 pt-20 pb-20 space-y-4 px-4">
      <span
        className={`${bVP.className} text-3xl text-center text-sky-700 pb-4`}
      >
        Testimonials:
      </span>

      <div className="mx-auto rounded-2xl border-dashed border-4 border-sky-500">
        <Image
          src="/cozycupidpics/testi-11.png"
          width={1250}
          height={1000}
          responsive
        />
      </div>
      <div className="mx-auto rounded-2xl border-dashed border-4 border-sky-500">
        <Image
          src="/cozycupidpics/testi-22.png"
          width={1250}
          height={1000}
          responsive
        />
      </div>
      <div className="mx-auto rounded-2xl border-dashed border-4 border-sky-500">
        <Image
          src="/cozycupidpics/testi-33.png"
          width={1250}
          height={1000}
          responsive
        />
      </div>
      <div className="mx-auto rounded-2xl border-dashed border-4 border-sky-500">
        <Image
          src="/cozycupidpics/testi-44.png"
          width={1250}
          height={1000}
          responsive
        />
      </div>
      <div className="mx-auto rounded-2xl border-dashed border-4 border-sky-500">
        <Image
          src="/cozycupidpics/testi-88.png"
          width={1250}
          height={1000}
          responsive
        />
      </div>
      <div className="mx-auto rounded-2xl border-dashed border-4 border-sky-500">
        <Image
          src="/cozycupidpics/testi-55.png"
          width={1250}
          height={1000}
          responsive
        />
      </div>
      <div className="mx-auto rounded-2xl border-dashed border-4 border-sky-500">
        <Image
          src="/cozycupidpics/testi-77.png"
          width={1250}
          height={1000}
          responsive
        />
      </div>
      <div className="mx-auto rounded-2xl border-dashed border-4 border-sky-500">
        <Image
          src="/cozycupidpics/testi-66.png"
          width={1250}
          height={1000}
          responsive
        />
      </div>
    </div>
  );
}
