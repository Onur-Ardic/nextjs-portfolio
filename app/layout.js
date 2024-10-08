import './globals.css'
import Navbar from '@/components/Home/Navbar/Navbar'
import StoreProvider from './StoreProvider'
import { ThemeWrapper } from './ThemeProvider'
import ThemeButton from '@/components/Uİ/ThemeButton'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Home/Footer/Footer'

export const metadata = {
  title: 'Onur Ardıç',
  description: 'Onur Ardıç Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <ThemeWrapper>
          <Navbar />
          <Toaster />
          <ThemeButton />
          {children}
          <Footer />
        </ThemeWrapper>
      </StoreProvider>
    </html>
  )
}
