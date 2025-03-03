"use client"


import {useContext} from "react";

import {Search} from "@/app/components/search";

import {SearchContext} from "@/app/context/search";
import Image from "next/image";

import {motion, easeInOut} from "framer-motion";

import {fadeIn} from "../../../variants";

export const Hero = () => {

    const {searchActive} = useContext<any>(SearchContext)

    return (
        <section className="h-[80vh] lg:h-[912px] bg-hero bg-cover bg-center bg-no-repeat" id='home'>
            <div className='container mx-auto h-full xl:pt-10'>
                <div className='flex flex-row justify-center items-end h-full'>
                    <div className='text-center xl:pb-10'>
                        <motion.h1
                            variants={fadeIn('down', 0.2)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.6}}
                            className='h1'>
                            Znajdź najlepszą <span className='text-accent'>Przestrzeń</span> dla siebie! {''}
                        </motion.h1>
                        <motion.p
                            variants={fadeIn('down', 0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.6}}
                            className='description mx-auto xl:mx-0 mb-6 xl:mb-10'>
                            Znajdź najlepsza lokalizacje magazynową dla siebie.
                        </motion.p>

                    </div>
                </div>
            </div>
            {searchActive ? (
                <motion.div
                    initial={{y: '-100%'}}
                    animate={{y: 0}}
                    transition={{ease: easeInOut}}
                    className='fixed top-[80px] z-10 w-full max-w-[1920px]'>
                    <Search/>
                </motion.div>
            ) : (
                <div className='-mt-12 w-full max-w-[1300px] mx-auto'>
                    <motion.div
                        variants={fadeIn('up', 0.8)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.2}}>
                        <Search/>
                    </motion.div>
                </div>

            )}
        </section>
    )
}