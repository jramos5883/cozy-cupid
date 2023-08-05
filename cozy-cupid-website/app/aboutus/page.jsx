import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto px-8 bg-blue-200">
      <Image
        src="/cozycupidpics/ad-comfyandrelaxing.jpg"
        width={500}
        height={500}
        alt="Cozy Cupid PSA"
        layout="responsive"
        priority
      />
      <h1 className="text-bold text-2xl pt-4 pb-2">Our Vision</h1>

      <p className="indent py-2 md-tablet:max-w-2xl">
        CozyCupid&apos;s vision is to be a guiding light in a world that often
        feels fast-paced and disconnected, reminding people of the importance of
        self-care, genuine connections, and the simple joy of being cozy.
        Together, we can create a more compassionate, comforting, and
        love-filled world. It embodies a harmonious blend of comfort, love, and
        support, making customers feel cherished, confident, and cherished in
        every interaction.
      </p>
      <h1 className="text-bold text-2xl pt-4 pb-2">The Cozy Cupid Story</h1>
      <p className="indent py-2 md-tablet:max-w-2xl">
        CozyCupid is a brand that believes in spreading love and comfort to our
        customers through our high-quality products. We understand that in
        today&apos;s fast-paced world, it&apos;s important to take a moment to
        relax and be cozy. That&apos;s why we specialize in creating a range of
        soft and fluffy products that are designed to keep you warm and
        comfortable.
      </p>
      <p className="indent py-2 md-tablet:max-w-2xl">
        Our products include seat cushions, pillows, wrist pad support, and
        other office and cozy home products that are perfect for women between
        the ages of 21-49. We know that our customers are busy women who are
        studying or working from home and want to feel comfortable while they
        pursue their life goals.
      </p>

      <p className="indent py-2 md-tablet:max-w-2xl">
        At CozyCupid, we pride ourselves on our commitment to quality and
        customer satisfaction. We believe that our products should not only feel
        good but also be durable and long-lasting. We want our customers to feel
        confident when making purchases from our brand, knowing that they are
        investing in products that are designed to last.
      </p>
      <p className="indent py-2 md-tablet:max-w-2xl">
        Our motto,{" "}
        <span className="text-bold">
          love, peace, comfort, and satisfaction,
        </span>{" "}
        encapsulates our brand philosophy. We want to spread love and peace to
        our customers through the comfort of our products. We also want our
        customers to feel satisfied with their purchases, knowing that they have
        made a smart investment in their comfort and well-being.
      </p>
      <p className="indent py-2 md-tablet:max-w-2xl">
        Ultimately, CozyCupid is a brand that is dedicated to providing our
        customers with the highest level of comfort and satisfaction. We believe
        that our products can help improve our customers&apos; posture,
        confidence, and overall well-being. With CozyCupid, you can trust that
        you are getting the best in comfort and quality.
      </p>
    </div>
  );
}
