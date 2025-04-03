import React from 'react'
import Image from 'next/image'
import { Button } from '@/shared/ui/button'
import { Check, Heart, Video } from 'lucide-react'

const HeroSections = () => {
    return (
        <section className='px-4 flex flex-col md:flex-row md:gap-9 lg:max-w-screen-lg md:mx-auto md:items-centerpb-8'>
            {/* Left Side */}
            <div className="flex flex-col items-center gap-9 md:flex-1 md:items-start">

                <div className='flex flex-col gap-5'>
                    <h1 className='text-center text-5xl leading-16 md:text-7xl font-bold md:leading-20 md:text-start lg:max-w-[500px]'>
                        Schedule Your Content With Ease
                    </h1>

                    <div className='text-primary'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="currentColor"
                            viewBox="0 0 487 34"
                            className="w-full h-auto"
                            fill="none"
                        >
                            <path
                                d="M 4 30 C 73.631 10.38 266.914 -17.088 483 30"
                                fill="transparent"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                            />
                        </svg>
                    </div>
                </div>

                <ul className='flex flex-col gap-5'>
                    <li className='flex gap-2 items-center'><Check className='text-primary w-6 h-6' />Post to all major platforms in one click</li>
                    <li className='flex gap-2 items-center'><Check className='text-primary w-6 h-6' />Schedule content for the perfect posting time</li>
                    <li className='flex gap-2 items-center'><Check className='text-primary w-6 h-6' />Customize content for each platform</li>
                    <li className='flex gap-2 items-center'><Check className='text-primary w-6 h-6' />Generate viral videos using our studio templates</li>
                </ul>

                <div className='flex gap-5'>
                    <Button size="lg">
                        <Heart />
                        Try For Free
                    </Button>
                    <Button size="lg" variant="outline">
                        <Video /> Watch Demo
                    </Button>
                </div>
            </div>

            {/* Right Side */}
            <div className='flex justify-center md:flex-1'>
                <Image
                    width={800}
                    height={700}
                    alt='Hero Section Image For Medium Screens'
                    src="/assets/hero-xxl.png"
                    className='max-w-[120%] h-auto'
                    priority
                />
            </div>
        </section>
    )
}

export default HeroSections
