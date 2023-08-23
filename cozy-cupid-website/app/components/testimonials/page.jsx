import TestiCards from "../testi-cards/card.comp";

const overlayData = [
  { img: "testi-1.jpg", text: "Testimonial 1" },
  { img: "testi-2.jpg", text: "Testimonial 2" },
  { img: "testi-3.jpg", text: "Testimonial 3" },
  { img: "testi-4.jpg", text: "Testimonial 4" },
  { img: "testi-5.jpg", text: "Testimonial 5" },
  { img: "testi-6.jpg", text: "Testimonial 6" },
  { img: "testi-7.jpg", text: "Testimonial 7" },
  { img: "testi-8.jpg", text: "Testimonial 8" },
];

export default function Testimonials() {
  return (
    <div>
      <TestiCards />
    </div>
  );
}
