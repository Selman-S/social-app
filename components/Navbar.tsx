import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between'>
      {/* LEFT */}
      <div>
        <Link href="/" className='font-bold text-xl text-blue-600' >SOCIALBLOG</Link>
      </div> 

      {/* CENTER */}
      <div className='hidden md:flex'>
        {/* LİNKS */}
        <div>
          <Link href="/" className='flex gap-2'>
          <Image src="/home.png" width={16} height={16}/>
          <span>Homepage</span>
          </Link>
        </div>
      </div> 
      {/* RİGHT */}
      <div>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar
