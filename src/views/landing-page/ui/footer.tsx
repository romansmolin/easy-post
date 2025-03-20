import { Separator } from "@/shared/ui/separator";
import Link from "next/link";

export const FooterSection = () => {
    return (
        <footer id="footer" className="lg:max-w-screen-xl lg:w-[75%] mx-auto pt-8 lg:pt-22">
            <div className="p-10 bg-card border border-primary rounded-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
                    <div className="col-span-full xl:col-span-2">
                        <Link href="#" className="flex font-bold items-center">
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
                            <h3 className="text-2xl">Easy Post</h3>
                        </Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Contact</h3>
                        <div>
                            <Link href="#" className="opacity-60 hover:opacity-100">
                                Github
                            </Link>
                        </div>

                        <div>
                            <Link href="#" className="opacity-60 hover:opacity-100">
                                Twitter
                            </Link>
                        </div>

                        <div>
                            <Link href="#" className="opacity-60 hover:opacity-100">
                                Instagram
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Platforms</h3>
                        <div>
                            <Link href="#" className="opacity-60 hover:opacity-100">
                                iOS
                            </Link>
                        </div>

                        <div>
                            <Link href="#" className="opacity-60 hover:opacity-100">
                                Android
                            </Link>
                        </div>

                        <div>
                            <Link href="#" className="opacity-60 hover:opacity-100">
                                Web
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Help</h3>
                        <div>
                            <Link href="#" className="opacity-60 hover:opacity-100">
                                Contact Us
                            </Link>
                        </div>

                        <div>
                            <Link href="#" className="opacity-60 hover:opacity-100">
                                FAQ
                            </Link>
                        </div>

                        <div>
                            <Link href="#" className="opacity-60 hover:opacity-100">
                                Feedback
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Socials</h3>
                        <div>
                            <Link href="#" className="opacity-60 hover:opacity-100">
                                Twitch
                            </Link>
                        </div>

                        <div>
                            <Link href="#" className="opacity-60 hover:opacity-100">
                                Discord
                            </Link>
                        </div>

                        <div>
                            <Link href="#" className="opacity-60 hover:opacity-100">
                                Dribbble
                            </Link>
                        </div>
                    </div>
                </div>

                <Separator className="my-6" />
                <section className="">
                    <h3 className="">
                        &copy; 2024 Designed and developed by
                        <Link
                            target="_blank"
                            href="https://github.com/leoMirandaa"
                            className="text-primary transition-all border-primary hover:border-b-2 ml-1"
                        >
                            Leo Miranda
                        </Link>
                    </h3>
                </section>
            </div>
        </footer>
    );
};