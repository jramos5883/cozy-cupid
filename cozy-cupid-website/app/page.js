import Carousel from "./components/carousel/carousel.comp"
import Product from './components/product/product.comp'

export default function LandingPage() {
  return (
    <div className='container mx-auto px-4'>
      <Carousel />
      <Product />
    </div>
  )
}
