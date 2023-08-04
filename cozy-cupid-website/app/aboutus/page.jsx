import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto px-8 bg-blue-200">
      <Image
        className=""
        src="/cozycupidpics/ad-comfyandrelaxing.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid PSA"
        priority
      />
      <h1 className="text-bold text-2xl pt-4 pb-2">Our Story</h1>
      <p className="indent py-2">
        CozyCupid is a brand that believes in spreading love and comfort to our
        customers through our high-quality products. We understand that in
        today's fast-paced world, it's important to take a moment to relax and
        be cozy. That's why we specialize in creating a range of soft and fluffy
        products that are designed to keep you warm and comfortable.
      </p>
      <p className="indent py-2">
        Our products include seat cushions, pillows, wrist pad support, and
        other office and cozy home products that are perfect for women between
        the ages of 21-49. We know that our customers are busy women who are
        studying or working from home and want to feel comfortable while they
        pursue their life goals.
      </p>

      <p className="indent py-2">
        At CozyCupid, we pride ourselves on our commitment to quality and
        customer satisfaction. We believe that our products should not only feel
        good but also be durable and long-lasting. We want our customers to feel
        confident when making purchases from our brand, knowing that they are
        investing in products that are designed to last.
      </p>
      <p className="indent py-2">
        Our motto, "love, peace, comfort, and satisfaction," encapsulates our
        brand philosophy. We want to spread love and peace to our customers
        through the comfort of our products. We also want our customers to feel
        satisfied with their purchases, knowing that they have made a smart
        investment in their comfort and well-being.
      </p>
      <p className="indent py-2">
        Ultimately, CozyCupid is a brand that is dedicated to providing our
        customers with the highest level of comfort and satisfaction. We believe
        that our products can help improve our customers' posture, confidence,
        and overall well-being. With CozyCupid, you can trust that you are
        getting the best in comfort and quality.
      </p>
    </div>
  );
}
