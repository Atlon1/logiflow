"use client"


import {useContext} from "react";

import {Search} from "@/app/components/search";

import {SearchContext} from "@/app/context/search";
import Image from "next/image";

export const Hero = () => {

    const {searchActive} = useContext<any>(SearchContext)

    return (
        <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id='home'>
            <div className='container mx-auto h-full xl:pt-10'>
                <div className='flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full'>
                    <div className='text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0'>
                        <h1 className='h1'>
                            Explore the Finest <span className='text-accent'>Global</span> Offers {''}
                        </h1>
                        <p className='description max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10'>
                            Find your ideal ride for any adventure with our comprehensive list of car rentals.
                        </p>
                        <div className='flex gap-x-3 justify-center xl:mt-0'>
                            <button className='btn-cta'>
                                <Image src={'/icons/buttons/app-store.svg'}
                                       alt='google-play'
                                       width={132}
                                       height={36}
                                />
                            </button>
                            <button className='btn-cta'>
                                <Image src={'/icons/buttons/google-play.svg'}
                                       alt='google-play'
                                       width={132}
                                       height={36}
                                />
                            </button>
                        </div>
                    </div>
                    <div>image</div>
                </div>
            </div>
            {searchActive ? (
                <div className='fixed top-[80px] z-10 w-full max-w-[1920px]'>
                    <Search/>
                </div>
            ) : (
                <div className='-mt-12 w-full max-w-[1300px] mx-auto'>
                    <Search/>
                </div>
            )}
        </section>
    )
}