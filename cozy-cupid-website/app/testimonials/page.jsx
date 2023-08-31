import Image from "next/image";
import { Be_Vietnam_Pro } from "next/font/google";
const bVP = Be_Vietnam_Pro({ weight: "700", subsets: ["latin"] });

export default function Testimonials() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto bg-blue-200 bg-opacity-90 h-screen">
      <span
        className={`${bVP.className} text-3xl text-center text-sky-700 pb-4`}
      >
        Testimonials:
      </span>
      <div className="grid grid-cols-2 gap-4 pb-8">
        <div className="mx-auto rounded-2xl border-dashed border-4 border-sky-500">
          <Image
            src="/cozycupidpics/testi-1.png"
            width={750}
            height={750}
            responsive
          />
        </div>
        <div className="mx-auto rounded-2xl border-dashed border-4 border-sky-500">
          <Image
            src="/cozycupidpics/testi-2.png"
            width={750}
            height={750}
            responsive
          />
        </div>
        <div className="mx-auto rounded-2xl border-dashed border-4 border-sky-500">
          <Image
            src="/cozycupidpics/testi-3.png"
            width={750}
            height={750}
            responsive
          />
        </div>
        <div className="mx-auto rounded-2xl border-dashed border-4 border-sky-500">
          <Image
            src="/cozycupidpics/testi-4.png"
            width={750}
            height={750}
            responsive
          />
        </div>
        <div className="mx-auto rounded-2xl border-dashed border-4 border-sky-500">
          <Image
            src="/cozycupidpics/testi-8.png"
            width={750}
            height={750}
            responsive
          />
        </div>
        <div className="mx-auto rounded-2xl border-dashed border-4 border-sky-500">
          <Image
            src="/cozycupidpics/testi-5.png"
            width={750}
            height={750}
            responsive
          />
        </div>
        <div className="mx-auto rounded-2xl border-dashed border-4 border-sky-500">
          <Image
            src="/cozycupidpics/testi-7.png"
            width={750}
            height={750}
            responsive
          />
        </div>
        <div className="mx-auto rounded-2xl border-dashed border-4 border-sky-500">
          <Image
            src="/cozycupidpics/testi-6.png"
            width={750}
            height={750}
            responsive
          />
        </div>
      </div>
    </div>
  );
}
