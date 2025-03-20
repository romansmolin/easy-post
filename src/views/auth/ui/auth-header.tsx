import { ModeSwitcher } from '@/shared/components';
import { Button } from '@/shared/ui/button';
import { LogIn } from 'lucide-react';
import React from 'react'

const AuthHeader = () => {
    return (
        <>
            <header className="sticky top-5 -mt-[88px] inset-x-0 z-40 flex flex-col px-4 py-2 backdrop-blur-3xl border border-primary rounded-xl shadow-inner bg-card bg-opacity-15 lg:max-w-screen-xl mx-auto">
                <div className="w-full flex justify-between items-center h-10 md:h-auto">
                    <div className="text-primary">
                        <svg
                            width="70"
                            height="70"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            className='h-11 w-fit md:w-auto md:h-auto'
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


                    {/* Login button for large screens */}
                    <div className="hidden lg:flex gap-2">
                        <Button size="lg" className="flex gap-3 items-center">
                            <LogIn />
                            Log In
                        </Button>
                        <ModeSwitcher />
                    </div>
                </div>
            </header>
        </>
    );
}


export default AuthHeader