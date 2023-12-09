'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export type NavbarProps = {
  navbarMenus: {
    id: number
    label: string
    link: string
  }[]
}
const Navbar = ({ navbarMenus }: NavbarProps) => {
  const path = usePathname()
  return (
    <div className="bg-black flex justify-end section-container text-white z-[100000] relative">
      <div className="flex">
        {navbarMenus.map((menu) => (
          <Link
            key={menu.id}
            href={menu.link}
            className={`ml-8 hover:underline font-medium underline-offset-8 hover:scale-110 delay-150 transition ease-in-out duration-300 ${
              path === menu.link ? 'text-yellow-400' : 'text-white'
            }`}
          >
            {menu.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
