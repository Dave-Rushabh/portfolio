import { NextResponse } from 'next/server'

export const GET = async () => {
  const menuItems = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'About', link: '/about' },
    { id: 3, label: 'Projects', link: '/projects' },
    { id: 4, label: 'Blogs', link: '/blog' },
    { id: 5, label: 'Contact', link: '/contact' },
    { id: 6, label: 'Resume', link: '/resume' },
  ]
  return NextResponse.json(menuItems)
}
