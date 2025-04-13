import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
export default function Header() {
  return (
   <nav className='bg-white sticky top-0 flex items-center justify-start px-[1rem] py-2 z-40'>
   {/* logo */}
    <Link className='w-[100px] h-[60px] relative' href={'/'}>
    <Image alt='Todo App Logo'  src={'/logo.svg'} fill/>
    </Link>
   </nav>
  )
}
