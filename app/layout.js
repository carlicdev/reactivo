import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollUp from './components/ScrollUp'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
 
const poppins = Poppins({ 
    weight: ['700', '800'],
    variable: '--font-poppins',
    subsets: ['latin'] 
  })

export const metadata = {
  title: 'Reactivo',
  description: 'Desarrollamos tus ideas. Desarrollamos software.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body >
        <Navbar />
        {children}
        <ScrollUp />
        <Footer />
      </body>
    </html>
  )
}
