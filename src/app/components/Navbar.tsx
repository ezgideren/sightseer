import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ClerkLoading, ClerkLoaded, SignedIn, SignedOut } from '@clerk/nextjs'

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
            <ClerkLoading>
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-gray-500 border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
            </ClerkLoading> 
            <ClerkLoaded>
            <div className='w-[30%] flex items-center gap-4 xl:gap-8 justify-end mx-6'>
                <SignedIn>
                <div className='flex flex-row justify-between gap-2 cursor-pointer'>
                        <span className='font-semibold text-gray-700'>My Profile</span>
                        <Image src="/passport.png" alt='' width={28} height={28}/>
                    </div>
                </SignedIn>
                <SignedOut>
                <div className='flex items-center gap-1 text-sm'>
                        <Image src="/login-luggage.png" alt='' width={36} height={36}/>
                        <Link href="/sign-in">Login/Register</Link>
                </div>
                </SignedOut>
            </div>
            </ClerkLoaded>
        </div>
    </div>
  )
}

export default Navbar