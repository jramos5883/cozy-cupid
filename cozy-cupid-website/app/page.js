import Carousel from "./components/carousel/carousel.comp";
import Product from "./components/product/product.comp";
import Testimonials from "./components/testi-cards/card.comp";

export default function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto px-8 bg-blue-200 bg-opacity-90">
      {/* <Carousel /> */}
      <Product />
      <Testimonials />
    </div>
  );
}
