import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/getMenus`,
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar navbarMenus={data} />
        {children}
      </body>
    </html>
  )
}
