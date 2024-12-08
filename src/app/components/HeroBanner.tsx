import React from 'react'
import Image from 'next/image'
import RightPage from './RightPage'


const HeroBanner = () => {
  return (
    <div className="flex-col justify-between p-10 bg-slate-50">
        <div className='flex flex-col'>
            <div className='flex flex-row items-center justify-start mt-10'>
                <div className='flex flex-col items-start gap-12 z-10'>
                <h1 className="text-3xl font-bold text-sky-800 leading-tight">
                    Where Will Your
                    <span className="text-yellow-500"> Next Adventure</span> Take You?
                    </h1>
                    <span className='text-xl text-slate-700 antialiased w-[60%]'>Start your journey with personalized travel recommendations tailored just for you. </span>
                    
                    <section id="how-it-works" className='mt-8' >
                        <span className='flex items-center gap-2 bg-sky-800 text-white px-6 py-3 rounded-lg hover:bg-sky-600 transition-all'>
                            GET STARTED
                        </span>
                    </section>
                
                </div>
                <Image src="/planner.jpg" alt="Cover Image" width={600} height={600} className='absolute rounded-ss-full shadow-2xl left-96 top-32 opacity-60'  />
            </div>
        </div>
        <div className='mt-14'>
                <RightPage/>
        </div>
    </div>
  )
}

export default HeroBanner