import Navbar from './navbar'
import FooterButton from './components/footerbutton/footerbutton.comp'

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cozy Cupid Website',
  description: 'Best cushions money can buy!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
      {children}
      <FooterButton />
      </body>
    </html>
  )
}
