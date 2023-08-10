import Carousel from "./components/carousel/carousel.comp";
import Product from './components/product/product.comp';

export default function LandingPage() {
  return (
    <div className='flex flex-col justify-center items-center mx-auto px-8 bg-blue-200 bg-opacity-90'>
      {/* <Carousel /> */}
      <Product />
    </div>
  )
}
