import './globals.css'
import Navbar from '@/components/Home/Navbar/Navbar'

export const metadata = {
  title: 'Onur Ardıç',
  description: 'Onur Ardıç Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
