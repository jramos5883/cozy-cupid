import './globals.css'

import Navbar from './navbar'
import FooterButton from './components/footerbutton/footerbutton.comp'
import Footer from './components/footer/footer.comp'

import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: 'Cozy Cupid Website',
  description: 'Best cushions money can buy!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
      {children}
      <Footer />
      <FooterButton />
      </body>
    </html>
  )
}
