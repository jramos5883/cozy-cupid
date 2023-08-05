import Image from "next/image";

export default function Product() {
  return (
    <div className="flex flex-col justify-center items-center container mx-auto ">
      <h1 className="text-3xl text-center pt-4">
        Gel Seat Cushion with Soft Plush Cover
      </h1>
      <Image
        className="rounded pb-2 pt-4"
        src="/cozycupidpics/mainimage.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid Cushion"
        priority
      />
      <div className="py-2 flex flex-col">
        <span className="text-xl text-center">THE COMFORT YOU DESERVE:</span>
        <p className="indent md-tablet:max-w-md">
          Don't spend another day in discomfort; Our elegantly soft plush cover
          gel seat cushion for sitting relieves pressure to give you just the
          right level of support while keeping you cozy.
        </p>
      </div>{" "}
      <Image
        className="rounded py-2"
        src="/cozycupidpics/ad-fluffyandsoft.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid Cushion"
        priority
      />
      <div className="py-2 flex flex-col">
        <span className="text-xl text-center">HOURS OF COZY LOUNGING:</span>
        <p className="indent md-tablet:max-w-md">
          Made from soft, plush coral fleece material, it's like sitting on a
          cloud;
        </p>
      </div>
      <Image
        className="rounded py-2"
        src="/cozycupidpics/ad-reducepain.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid Cushion"
        priority
      />
      <div className="py-2 flex flex-col">
        <span className="text-xl text-center">LONG-LASTING PAIN RELIEF:</span>
        <p className="indent md-tablet:max-w-md">
          Our unique-design gel seat cushion takes pressure off painful points
          for lasting relief; Supports posture and encourages proper alignment
          while sitting for comfort in any position.
        </p>
      </div>
      <Image
        className="rounded py-2"
        src="/cozycupidpics/feature-coolandbreathable.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid Cushion"
        priority
      />
      <div className="py-2 flex flex-col">
        <span className="text-xl text-center">STAY COOL WHILE SITTING:</span>
        <p className="indent md-tablet:max-w-md">
          Whether used for yoga, gaming, airplane, car, or office seat cushion;
          The honeycomb-shaped gel insert allows air to circulate, preventing
          sweat and heat build-up for cooling comfort.
        </p>
      </div>
      <Image
        className="rounded py-2"
        src="/cozycupidpics/feature-dimensions.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid Cushion"
        priority
      />
      <div className="py-2 flex flex-col">
        <span className="text-xl text-center">
          SUPERIOR ELASTICITY FOR LASTING SUPPORT:
        </span>
        <p className="indent md-tablet:max-w-md">
          The elastic gel insert quickly restores to its original shape;
        </p>
      </div>
      <Image
        className="rounded py-2"
        src="/cozycupidpics/feature-nonslipbottom.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid Cushion"
        priority
      />
      <div className="py-2 flex flex-col">
        <span className="text-xl text-center">STAYS SECURLY IN PLACE:</span>
        <p className="indent md-tablet:max-w-md">
          Our non-slip backing keeps the cushion in place, so you can feel
          secure while sitting or driving.
        </p>
      </div>
      <Image
        className="rounded py-2"
        src="/cozycupidpics/ad-washablecover.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid Cushion"
        priority
      />
      <div className="py-2 flex flex-col">
        <span className="text-xl text-center">WASHING MACHINE SAFE:</span>
        <p className="indent md-tablet:max-w-md">
          Zipper design makes removing the machine washable cover easy to keep
          clean and looking great.
        </p>
      </div>
      <Image
        className="rounded py-2"
        src="/cozycupidpics/ad-perfectgift.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid Cushion"
        priority
      />
      <div className="py-2 flex flex-col">
        <span className="text-xl text-center">OUR BRAND PROMISE:</span>
        <p className="indent md-tablet:max-w-md">
          Enjoy comfort to the fullest and not have to worry about butt pain
          from sitting on hard surfaces again. Give our cozy seat cushions a try
          and if you are not satisfied, we'll provide a full refund!
        </p>
      </div>
    </div>
  );
}
