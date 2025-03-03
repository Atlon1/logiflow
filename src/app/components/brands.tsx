"use client"

import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn} from "../../../variants";


export const Brands = () => {
    return (
        <section className='xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center'>
            <motion.div
                variants={fadeIn('up', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.6}}
                className='container mx-auto'>
                <div className='grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between'>
                    <div>
                        <Image src={'/icons/brands/b1.jpg'}
                               width={100}
                               height={100}
                               alt='feedEx'
                        />
                    </div>
                    <div>
                        <Image src={'/icons/brands/b2.jpg'}
                               width={100}
                               height={100}
                               alt='DHL'
                        />
                    </div>
                    <div>
                        <Image src={'/icons/brands/b3.jpg'}
                               width={100}
                               height={100}
                               alt='Proste'
                        />
                    </div>
                    <div>
                        <Image src={'/icons/brands/b4.jpg'}
                               width={100}
                               height={100}
                               alt='UPS'
                        />
                    </div>
                    <div>
                        <Image src={'/icons/brands/b5.jpg'}
                               width={100}
                               height={100}
                               alt='BuldingAmerica'
                        />
                    </div>
                    <div>
                        <Image src={'/icons/brands/b6.jpg'}
                               width={100}
                               height={100}
                               alt='McLane'
                        />
                    </div>
                    <div>
                        <Image src={'/icons/brands/b7.jpg'}
                               width={100}
                               height={100}
                               alt='La Poste'
                        />
                    </div>
                </div>
            </motion.div>

        </section>
    )
}