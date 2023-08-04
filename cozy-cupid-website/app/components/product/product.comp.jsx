import Image from "next/image";

export default function Product() {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto ">
      <h1 className="text-3xl text-center">
        Gel Seat Cushion with Soft Plush Cover
      </h1>
      <Image
        className="rounded py-4"
        src="/cozycupidpics/mainimage.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid Cushion"
        priority
      />
      <Image
        className="rounded py-2"
        src="/cozycupidpics/feature-coolandbreathable.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid Cushion"
        priority
      />
      <Image
        className="rounded py-2"
        src="/cozycupidpics/feature-dimensions.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid Cushion"
        priority
      />
      <Image
        className="rounded py-2"
        src="/cozycupidpics/ad-fluffyandsoft.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid Cushion"
        priority
      />
      <Image
        className="rounded py-2"
        src="/cozycupidpics/ad-washablecover.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid Cushion"
        priority
      />
      <Image
        className="rounded py-2"
        src="/cozycupidpics/feature-nonslipbottom.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid Cushion"
        priority
      />
    </div>
  );
}
