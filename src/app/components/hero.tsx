"use client"


import {useContext} from "react";

import {Search} from "@/app/components/search";

import {SearchContext} from "@/app/context/search";

export const Hero = () => {

    const {searchActive} = useContext<any>(SearchContext)

    return (
        <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id='home'>
            <div className='container mx-auto h-full xl:pt-10'>
                <div>
                    <div>text</div>
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