import Image from "next/image";
import { Be_Vietnam_Pro } from "next/font/google";
const bVP = Be_Vietnam_Pro({ weight: "700", subsets: ["latin"] });

export default function Product() {
  return (
    <div className="flex flex-col justify-center items-center text-center container mx-auto bg-opacity-90">
      <h1 className={`${bVP.className} text-4xl text-sky-700 text-center pt-8`}>
        Gel Seat Cushion with Soft Plush Cover
      </h1>
      <div className="flex flex-row">
        <div className="p-4">
          <Image
            className="rounded-3xl border-dashed border-4 border-sky-500 md-tablet:max-w-lg"
            src="/cozycupidpics/mainimage.jpg"
            width={500}
            height={500}
            alt="Cozy Cupid Cushion"
            priority
          />
        </div>
        <div className="p-4 hidden lg-laptop:block">
          <div className="pb-2">
            <Image
              className="rounded-3xl border-dashed border-4 border-sky-500 lg-laptop:max-w-xs"
              src="/cozycupidpics/feature-honycombgel.jpg"
              width={500}
              height={500}
              alt="Cozy Cupid Cushion"
              priority
            />
          </div>
          {/* <div className="pb-2">
            <Image
              className="rounded-3xl border-dashed border-4 border-sky-500 lg-laptop:max-w-xs"
              src="/cozycupidpics/feature-antisplidots.jpg"
              width={500}
              height={500}
              alt="Cozy Cupid Cushion"
              priority
            />
          </div> */}
          <div>
            <Image
              className="rounded-3xl border-dashed border-4 border-sky-500 lg-laptop:max-w-xs"
              src="/cozycupidpics/feature-covermaterial.jpg"
              width={500}
              height={500}
              alt="Cozy Cupid Cushion"
              priority
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="py-2 flex flex-col">
          <span
            className={`${bVP.className} text-2xl text-center text-sky-700`}
          >
            THE COMFORT YOU DESERVE:
          </span>
          <p className="indent md-tablet:max-w-md text-xl">
            Don&apos;t spend another day in discomfort; Our elegantly soft plush
            cover gel seat cushion for sitting relieves pressure to give you
            just the right level of support while keeping you cozy.
          </p>
        </div>
        <div className="flex justify-center item-center py-8">
          <button>
            <a
              className="py-4 px-20 md-tablet:px-28 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-900"
              href="https://www.amazon.com/stores/page/A4BB947E-5494-4D8C-B633-60D339B78843?ingress=2&visitId=fb5ad8ac-a8aa-4c6e-9598-b5f22a45ed05&ref_=ast_bln "
              target="_blank"
            >
              Buy Now!
            </a>
          </button>
        </div>
      </div>
      {/* Start of product features */}

      <div className="lg-laptop:flex lg-laptop:flex-row">
        <div className="py-2 lg-laptop:p-8">
          <Image
            className="mx-auto rounded-3xl border-dashed border-4 border-sky-500 text-center"
            src="/cozycupidpics/ad-fluffyandsoft.jpg"
            width={500}
            height={500}
            alt="Cozy Cupid Cushion"
            priority
          />
          <div className="py-2 flex flex-col">
            <span
              className={`${bVP.className} text-2xl text-center text-sky-700`}
            >
              HOURS OF COZY LOUNGING:
            </span>
            <p className="indent md-tablet:max-w-md text-xl">
              Made from soft, plush coral fleece material, it&apos;s like
              sitting on a cloud;
            </p>
          </div>
        </div>
        <div className="py-2 lg-laptop:p-8">
          <Image
            className="mx-auto rounded-3xl border-dashed border-4 border-sky-500"
            src="/cozycupidpics/ad-reducepain.jpg"
            width={500}
            height={500}
            alt="Cozy Cupid Cushion"
            priority
          />
          <div>
            <div className="py-2 flex flex-col">
              <span
                className={`${bVP.className} text-2xl text-center text-sky-700`}
              >
                LONG-LASTING PAIN RELIEF:
              </span>
              <p className="indent md-tablet:max-w-md text-xl">
                Our unique-design gel seat cushion takes pressure off painful
                points for lasting relief; Supports posture and encourages
                proper alignment while sitting for comfort in any position.
              </p>
            </div>
          </div>
        </div>
        <div className="py-2 hidden lg-laptop:p-8 xl-desktop:block">
          <Image
            className="mx-auto rounded-3xl border-dashed border-4 border-sky-500"
            src="/cozycupidpics/feature-coolandbreathable.jpg"
            width={500}
            height={500}
            alt="Cozy Cupid Cushion"
            priority
          />
          <div className="py-2 flex flex-col">
            <span
              className={`${bVP.className} text-2xl text-center text-sky-700`}
            >
              STAY COOL WHILE SITTING:
            </span>
            <p className="indent md-tablet:max-w-md text-xl">
              Whether used for yoga, gaming, airplane, car, or office seat
              cushion; The honeycomb-shaped gel insert allows air to circulate,
              preventing sweat and heat build-up for cooling comfort.
            </p>
          </div>
        </div>
      </div>

      <div className="lg-laptop:flex lg-laptop:flex-row">
        <div className="py-2 lg-laptop:p-8 xl-desktop:hidden">
          <Image
            className="mx-auto rounded-3xl border-dashed border-4 border-sky-500"
            src="/cozycupidpics/feature-coolandbreathable.jpg"
            width={500}
            height={500}
            alt="Cozy Cupid Cushion"
            priority
          />
          <div className="py-2 flex flex-col">
            <span
              className={`${bVP.className} text-2xl text-center text-sky-700`}
            >
              STAY COOL WHILE SITTING:
            </span>
            <p className="indent md-tablet:max-w-lg text-xl">
              Whether used for yoga, gaming, airplane, car, or office seat
              cushion; The honeycomb-shaped gel insert allows air to circulate,
              preventing sweat and heat build-up for cooling comfort.
            </p>
          </div>
        </div>

        {/* comment */}

        <div className="lg-laptop:flex lg-laptop:flex-row">
          <div className="py-2 lg-laptop:p-8">
            <Image
              className="mx-auto rounded-3xl border-dashed border-4 border-sky-500"
              src="/cozycupidpics/feature-dimensions.jpg"
              width={500}
              height={500}
              alt="Cozy Cupid Cushion"
              priority
            />
            <div className="py-2 flex flex-col">
              <span
                className={`${bVP.className} text-2xl text-center text-sky-700`}
              >
                SUPERIOR ELASTICITY FOR LASTING SUPPORT:
              </span>
              <p className="indent md-tablet:max-w-md text-xl">
                The elastic gel insert quickly restores to its original shape;
              </p>
            </div>
          </div>
          <div className="py-2 lg-laptop:p-8 hidden xl-desktop:block">
            <Image
              className="mx-auto rounded-3xl border-dashed border-4 border-sky-500"
              src="/cozycupidpics/feature-nonslipbottom.jpg"
              width={500}
              height={500}
              alt="Cozy Cupid Cushion"
              priority
            />
            <div className="py-2 flex flex-col">
              <span
                className={`${bVP.className} text-2xl text-center text-sky-700`}
              >
                STAYS SECURLY IN PLACE:
              </span>
              <p className="indent md-tablet:max-w-md text-xl">
                Our non-slip backing keeps the cushion in place, so you can feel
                secure while sitting or driving.
              </p>
            </div>
          </div>
          <div className="py-2 lg-laptop:p-8 hidden xl-desktop:block">
            <Image
              className="mx-auto rounded-3xl border-dashed border-4 border-sky-500"
              src="/cozycupidpics/ad-washablecover.jpg"
              width={500}
              height={500}
              alt="Cozy Cupid Cushion"
              priority
            />
            <div className="py-2 flex flex-col">
              <span
                className={`${bVP.className} text-2xl text-center text-sky-700`}
              >
                WASHING MACHINE SAFE:
              </span>
              <p className="indent md-tablet:max-w-md text-xl">
                Zipper design makes removing the machine washable cover easy to
                keep clean and looking great.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg-laptop:flex lg-laptop:flex-row xl-desktop:hidden">
        <div className="py-2 lg-laptop:p-8">
          <Image
            className="mx-auto rounded-3xl border-dashed border-4 border-sky-500"
            src="/cozycupidpics/feature-nonslipbottom.jpg"
            width={500}
            height={500}
            alt="Cozy Cupid Cushion"
            priority
          />
          <div className="py-2 flex flex-col">
            <span
              className={`${bVP.className} text-2xl text-center text-sky-700`}
            >
              STAYS SECURLY IN PLACE:
            </span>
            <p className="indent md-tablet:max-w-md text-xl">
              Our non-slip backing keeps the cushion in place, so you can feel
              secure while sitting or driving.
            </p>
          </div>
        </div>
        <div className="py-2 lg-laptop:p-8">
          <Image
            className="mx-auto rounded-3xl border-dashed border-4 border-sky-500"
            src="/cozycupidpics/ad-washablecover.jpg"
            width={500}
            height={500}
            alt="Cozy Cupid Cushion"
            priority
          />
          <div className="py-2 flex flex-col">
            <span
              className={`${bVP.className} text-2xl text-center text-sky-700`}
            >
              WASHING MACHINE SAFE:
            </span>
            <p className="indent md-tablet:max-w-md text-xl">
              Zipper design makes removing the machine washable cover easy to
              keep clean and looking great.
            </p>
          </div>
        </div>
      </div>

      <Image
        className="rounded-3xl border-dashed border-4 border-sky-500 lg-laptop:min-w-3xl"
        src="/cozycupidpics/ad-perfectgift.jpg"
        width={1000}
        height={1000}
        alt="Cozy Cupid Cushion"
        priority
      />
      <div className="py-2 flex flex-col">
        <span className={`${bVP.className} text-2xl text-center text-sky-700`}>
          OUR BRAND PROMISE:
        </span>
        <p className="indent md-tablet:max-w-lg lg-laptop:max-w-2xl text-xl">
          Enjoy comfort to the fullest and not have to worry about butt pain
          from sitting on hard surfaces again. Give our cozy seat cushions a try
          and if you are not satisfied, we&apos;ll provide a full refund!
        </p>
      </div>
    </div>
  );
}
