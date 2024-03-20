"use client"
import { useState } from "react"
export default function Header(){
    const [menuOpened,setMenuOpened]=useState(false)
    return(
        <div>
            <nav className="sticky top-0 z-40 border-[#4d4d5d] border-b-[1px]">
                <div className="container px-6 py-4  mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <a href="/" className="z-20">
                            {/* <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" /> */}
                            <h1 className="text-2xl font-bold">Pluto.</h1>
                        </a>
                        <div onClick={(e) => { setMenuOpened(!menuOpened) }} className="flex md:hidden">
                            <div className="text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                {!menuOpened ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>


                                ) : (
                                    <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </div>
                        </div>


                    </div>
                    {menuOpened && (
                        <div className="text-lg font-bold absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                            <div className="flex flex-col md:flex-row">
                                {/* <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#hero-section' className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Home</a>
                                <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#skills-section' className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Skills</a>
                                <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#services-section' className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Services</a>
                                <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#projects-section' className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Projects</a>
                                <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#about-section' className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">About</a>
                                <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#contact-section' className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Contact</a> */}

                            </div>
                        </div>
                    )}


                    <div className="hidden lg:flex text-lg font-bold absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                        <div className="flex flex-col md:flex-row">
                            {/* <a href='#hero-section' className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Home</a> */}
                            
                            </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}