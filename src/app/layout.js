import { Navbar, Footer } from '@/components'
import './globals.css'
import { Inter } from 'next/font/google'
import { StateContext } from '../../context/StateContext'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dark Souls Weapons',
  description: 'Created by kurabyo',
}

export default function RootLayout({ children }) {
  return (
    
      
      <html lang="en">
        <body className='layout'>
          <header>
            <Navbar />
          </header>
          <main className='main-container'>
          <Toaster/>
          <StateContext>
            {children}
          </StateContext>
          </main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    
  )
}
