import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between bg-slate-50'>
        {/* Logo & Title */}
            <div className='flex items-center w-[20%] mx-6'> 
                <Image src="/logo.png" alt="" width={56} height={56}/>
                <Link href="/" className="font-bold text-xl text-slate-800 mx-8">SIGHTSEER</Link>
            </div>
        {/* Menu */}
            <div className='hidden md:flex w-[50%] items-center justify-between'>
            <div className='flex gap-10 text-gray-700'>
                    <Link href="/" className='flex items-center gap-2'>
                        <span>Explore</span>
                    </Link>
                    <Link href="/" className='flex items-center gap-2'>
                        <span>My Trips</span>
                    </Link>
                    <Link href="/" className='flex items-center gap-2'>    
                        <span>About</span>
                    </Link>
                </div>           
        {/* Login&Register */}    
            <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end mx-6'>
                <div className='flex items-center gap-1 text-sm'>
                        <Image src="/login-luggage.png" alt='' width={36} height={36}/>
                        <Link href="/sign-in">Login/Register</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar