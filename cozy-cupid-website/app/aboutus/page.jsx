import Image from "next/image";
import { Be_Vietnam_Pro } from "next/font/google";
const bVP = Be_Vietnam_Pro({ weight: "700", subsets: ["latin"] });

export default function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto px-8 bg-blue-200 bg-opacity-90 h-full">
      <Image
        className="rounded-3xl border-dashed border-4 border-sky-500 md-tablet:max-w-3xl mt-4"
        src="/cozycupidpics/ad-comfyandrelaxing.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid PSA"
        layout="responsive"
        priority
      />
      <span
        className={`${bVP.className} text-bold text-3xl pt-4 pb-2 text-sky-700`}
      >
        Our Vision
      </span>

      <p className="indent py-2 md-tablet:max-w-2xl text-xl">
        Our vision is to be a guiding light in a world that often feels
        fast-paced and disconnected, reminding people of the importance of
        self-care, genuine connections, and the simple joy of being cozy.
        Together, we can create a more compassionate, comforting, and
        love-filled world. It embodies a harmonious blend of comfort, love, and
        support, making customers feel cherished and confident in every
        interaction.
      </p>
      <span
        className={`${bVP.className} text-bold text-3xl pt-4 pb-2 text-sky-700`}
      >
        The CozyCupid Story
      </span>
      <p className="indent py-2 md-tablet:max-w-2xl text-xl">
        We are a brand dedicated to providing you with the highest level of
        comfort and quality. Our soft, fluffy products are designed to keep you
        warm and cozy, whether you're studying, working from home, or pursuing
        your life goals. We believe in spreading love and comfort through our
        high-quality offerings, aiming to improve your posture, confidence, and
        overall well-being. Our commitment to durability ensures your investment
        in long-lasting comfort. With our motto,
        <span className={`${bVP.className} text-bold text-2xl text-sky-700`}>
          {" "}
          &quot;Love, Peace, Comfort, and Satisfaction&quot;,
        </span>{" "}
        you can trust that you're choosing the best in comfort and quality.
      </p>
    </div>
  );
}
