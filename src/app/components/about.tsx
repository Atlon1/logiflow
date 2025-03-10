"use client"

import Image from "next/image";
import {MdOutlineMapsHomeWork, MdOutlineBuildCircle, MdOutlineDirectionsCar} from "react-icons/md";
import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import {fadeIn} from "../../../variants";


export const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return (
        <section
            className='section flex items-center'
            id='about'
            ref={ref}
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row xl:justify-between'>
                    <motion.div
                        variants={fadeIn('up',0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.6}}
                        className='flex-1 mb-8 xl:mb-0'>
                        <Image
                            className='rounded-[20px]'
                            src={'/images/about/m1.jpg'}
                            alt='about'
                            width={600}
                            height={448}
                        />
                    </motion.div>
                    <div className='flex-1 flex items-center xl:justify-center'>
                        <div className='xl:max-w-[517px]'>
                            <motion.h2
                                variants={fadeIn('up',0.4)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{once: false, amount: 0.2}}
                                className='h2'>
                                Magazyny dostępne od zaraz!
                            </motion.h2>
                            <motion.p
                                variants={fadeIn('up',0.6)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{once: false, amount: 0.2}}
                                className='mb-[42px] max-w-md'>
                                Znajdź najlepsza lokalizacje magazynową dla siebie. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </motion.p>
                            <motion.div
                                variants={fadeIn('up',0.8)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{once: false, amount: 0.2}}
                                className='flex items-center gap-x-8 mb-12'>
                                <div className='flex flex-col w-[100px]'>
                                    <MdOutlineDirectionsCar className='text-5xl text-accent'/>
                                    <div className='text-3xl font-black mb-2'>
                                        {inView ? <CountUp start={0} end={50} duration={3} delay={3}/> : null}
                                        +
                                    </div>
                                    <div className='uppercase text-[13px] font-semibold text-secondary'>
                                        Rodzaje <br/> Magazynów
                                    </div>
                                </div>
                                <div className='flex flex-col w-[100px]'>
                                    <MdOutlineMapsHomeWork className='text-5xl text-accent'/>
                                    <div className='text-3xl font-black mb-2'>
                                        {inView ? <CountUp start={0} end={135} duration={3} delay={3}/> : null}
                                        +
                                    </div>
                                    <div className='uppercase text-[13px] font-semibold text-secondary'>
                                        Dostępne <br/> magazyny
                                    </div>
                                </div>
                                <div className='flex flex-col w-[100px]'>
                                    <MdOutlineBuildCircle className='text-5xl text-accent'/>
                                    <div className='text-3xl font-black mb-2'>
                                        {inView ? <CountUp start={0} end={35} duration={3} delay={3}/> : null}
                                        +
                                    </div>
                                    <div className='uppercase text-[13px] font-semibold text-secondary'>
                                        Punktów <br/> Kontaktu
                                    </div>
                                </div>
                            </motion.div>
                            <motion.button
                                variants={fadeIn('up',1)}
                                initial='hidden'
                                whileInView={'show'}
                                viewport={{once: false, amount: 0.2}}
                                className='hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-medium text-white tracking-[2px] text-[13px] max-w-[184px]'>
                                Zobacz wszystkie magazyny
                            </motion.button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}