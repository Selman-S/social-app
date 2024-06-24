import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between'>
      {/* LEFT */}
      <div>
        <Link href="/" className='font-bold text-xl text-blue-600' >SOCIALBLOG</Link>
      </div> 

      {/* CENTER */}
      <div className='hidden'>
      </div> 
      {/* RİGHT */}
      <div>
        <MobileMenu />
      </div>
    </div>
  )
}

export default Navbar
