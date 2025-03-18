import { Button } from '@/shared/ui/button'
import { LogIn } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='hidden flex max-w-6xl justify-between items-center py-4 mx-auto'>
            <div className="text-primary">
                <svg
                    width="70"
                    height="70"
                    viewBox="0 0 100 100"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                >
                    <path d="M20,30 Q50,5 80,30" strokeLinecap="round" strokeWidth="5" />
                    <path d="M20,70 Q50,95 80,70" strokeLinecap="round" strokeWidth="5" />

                    <circle cx="50" cy="50" r="15" />
                    <line x1="50" y1="50" x2="58" y2="50" strokeLinecap="round" />
                    <line x1="50" y1="50" x2="50" y2="42" strokeLinecap="round" />

                    <circle cx="25" cy="25" r="2.5" fill="currentColor" />
                    <circle cx="75" cy="25" r="2.5" fill="currentColor" />
                    <circle cx="25" cy="75" r="2.5" fill="currentColor" />
                    <circle cx="75" cy="75" r="2.5" fill="currentColor" />
                </svg>
            </div>


            <div className='flex gap-10'>
                <Link className='text-xl font-bold' href="#">Pricing</Link>
                <Link className='text-xl font-bold' href="#">Reviews</Link>
                <Link className='text-xl font-bold' href="#">Features</Link>
                <Link className='text-xl font-bold' href="#">Platforms</Link>
                <Link className='text-xl font-bold' href="#">FAQ</Link>
            </div>

            <div className='flex gap-2'>
                <Button size="lg" className='flex gap-3 items-center'>
                     <LogIn />
                    Log In
                </Button>
            </div>
        </header>
    )
}

export default Header