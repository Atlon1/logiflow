"use client"

import React, {useContext, useEffect, useState} from "react";

import Image from "next/image";

import {Link} from "react-scroll";

import {SearchMobile} from "@/app/components/search-mobile";

import {useMediaQuery} from "react-responsive";

import {BiMenuAltRight, BiX} from "react-icons/bi";

import {SearchContext} from "@/app/context/search";


export const Header = () => {
    const {setSearchActive} = useContext<any>(SearchContext);


    const [header, setHeader] = useState(false);
    const [nav, setNav] = useState(false);

    const desktopMode = useMediaQuery({
        query: "(min-width: 1300px)"
    })

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setHeader(true);
            } else {
                setHeader(false);
            }
            if (window.scrollY > 800) {
                setSearchActive(true)
            } else {
                setSearchActive(false)
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })


    return (
        <header
            className={`${header ? 'bg-white shadow-md py-2' : 'bg-white/70 shadow-none py-4'} fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}>
            <div className='xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between'>
                <div className='flex justify-between items-center px-4 '>
                    <Link to='home'
                          smooth={desktopMode}
                          spy={true}
                          className='cursor-pointer'>
                        <Image
                            src={'/icons/logo_logi.png'}
                            alt='logo'
                            width={120}
                            height={64}
                        />
                    </Link>
                    <div
                        onClick={() => setNav(!nav)}
                        className='cursor-pointer xl:hidden'>{nav ?
                        (<BiX className='text-4xl'/>)
                        :
                        (<BiMenuAltRight className='text-4xl'/>)}
                    </div>
                </div>
                <nav className={`${nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'} 
                flex flex-col w-full bg-white gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row 
                xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center
                xl:text-left uppercase text-sm xl:text[15px] xl:normal-case`}>
                        <Link
                            className='cursor-pointer border-b-2 border-transparent hover:border-accent transition-all duration-300'
                            to='home'
                            activeClass='active'
                            spy={true}
                            smooth={desktopMode}
                        >Strona główna
                        </Link>
                        <Link
                            className='cursor-pointer border-b-2 border-transparent hover:border-accent transition-all duration-300'
                            to='cars'
                            activeClass='active'
                            spy={true}
                            smooth={desktopMode}
                        >Magazyny
                        </Link>
                        <Link
                            className='cursor-pointer border-b-2 border-transparent hover:border-accent transition-all duration-300'
                            to='about'
                            activeClass='active'
                            spy={true}
                            smooth={desktopMode}
                        >O nas
                        </Link>
                        <Link
                            className='cursor-pointer border-b-2 border-transparent hover:border-accent transition-all duration-300'
                            to='why'
                            activeClass='active'
                            spy={true}
                            smooth={desktopMode}
                        >Dlaczego my?
                        </Link>
                        <Link
                            className='cursor-pointer border-b-2 border-transparent hover:border-accent transition-all duration-300'
                            to='testimonials'
                            activeClass='active'
                            spy={true}
                            smooth={desktopMode}
                        >Opinie
                        </Link>
                        <Link
                            className='cursor-pointer border-b-2 border-transparent hover:border-accent transition-all duration-300'
                            to='contact'
                            activeClass='active'
                            spy={true}
                            smooth={desktopMode}
                        >Kontakt
                        </Link>
                        <Link
                            className='xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto'
                            to='/'
                            activeClass='active'
                            spy={true}
                            smooth={desktopMode}
                        >Zobacz nasze magazyny
                        </Link>
                    <SearchMobile/>
                </nav>
            </div>
        </header>
    )

}