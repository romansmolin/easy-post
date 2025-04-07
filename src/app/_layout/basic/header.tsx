'use client'

import { ModeSwitcher } from '@/shared/components'
import { Button } from '@/shared/ui/button'
import { ArrowBigLeft, LogIn, Menu, X } from 'lucide-react'
import Link from 'next/link'

import React, { ReactNode, useState } from 'react'

const Header = ({ isAuth, children }: { isAuth?: boolean; children: ReactNode }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <>
            <header className="flex flex-col px-4 py-2 backdrop-blur-3xl mx-auto border-1 border-primary rounded-xl shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] top-5 sticky z-40 justify-between items-center p-2 bg-card lg:max-w-screen-xl">
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
                            className="h-11 w-fit md:w-auto md:h-auto"
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

                    {/* Navigation for large screens */}
                    {!isAuth && (
                        <div className="hidden lg:flex gap-10">
                            <Link className="text-xl font-bold" href="#">
                                Pricing
                            </Link>
                            <Link className="text-xl font-bold" href="#">
                                Reviews
                            </Link>
                            <Link className="text-xl font-bold" href="#">
                                Features
                            </Link>
                            <Link className="text-xl font-bold" href="#">
                                Platforms
                            </Link>
                            <Link className="text-xl font-bold" href="#">
                                FAQ
                            </Link>
                        </div>
                    )}

                    {/* Login button for large screens */}
                    {!isAuth ? (
                        <div className="hidden lg:flex gap-2">
                            {children}
                            <ModeSwitcher />
                        </div>
                    ) : (
                        <Button size="lg" asChild>
                            <Link href="/">
                                <ArrowBigLeft />
                                <span className="hidden sm:block">Home</span>
                            </Link>
                        </Button>
                    )}

                    {/* Hamburger menu button for mobile */}
                    {!isAuth && (
                        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    )}
                </div>
            </header>

            {isMobileMenuOpen && !isAuth && (
                <div className="lg:hidden fixed h-screen w-screen inset-0 z-50 backdrop-blur-md flex flex-col items-center justify-center space-y-8">
                    <button className="absolute top-4 right-4" onClick={() => setMobileMenuOpen(false)}>
                        <X size={24} />
                    </button>

                    {!isAuth && (
                        <>
                            <Link className="text-2xl font-bold" href="#" onClick={() => setMobileMenuOpen(false)}>
                                Pricing
                            </Link>
                            <Link className="text-2xl font-bold" href="#" onClick={() => setMobileMenuOpen(false)}>
                                Reviews
                            </Link>
                            <Link className="text-2xl font-bold" href="#" onClick={() => setMobileMenuOpen(false)}>
                                Features
                            </Link>
                            <Link className="text-2xl font-bold" href="#" onClick={() => setMobileMenuOpen(false)}>
                                Platforms
                            </Link>
                            <Link className="text-2xl font-bold" href="#" onClick={() => setMobileMenuOpen(false)}>
                                FAQ
                            </Link>
                        </>
                    )}

                    <Button
                        size="lg"
                        className="flex gap-2 items-center"
                        onClick={() => setMobileMenuOpen(false)}
                        asChild
                    >
                        <Link href="/auth">
                            <LogIn />
                            Log In
                        </Link>
                    </Button>
                </div>
            )}
        </>
    )
}

export default Header
