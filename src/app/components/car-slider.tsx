"use client"

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import Image from "next/image";
import {FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";
import {motion} from "framer-motion";
import {fadeIn} from "../../../variants";


const cars = [
    {
        type: 'Magazyn Poznan',
        name: 'Nazwa Firmy',
        price: 29,
        stars: 3.5,
        image: '/images/magSlider/m1.jpg',
        info: [
            {
                icon: 'icons/magSlider/gearshift.svg',
                text: 'Manual'
            },
            {
                icon: 'icons/magSlider/seat.svg',
                text: '5 seats'
            },
            {
                icon: 'icons/magSlider/gas.svg',
                text: 'Gas'
            },
            {
                icon: 'icons/magSlider/engine.svg',
                text: '1600 Hp'
            },
            {
                icon: 'icons/magSlider/wheel.svg',
                text: 'Front'
            }]
    },
    {
        type: 'Magazyn Wronki',
        name: 'Nazwa Firmy',
        price: 25,
        stars: 5,
        image: '/images/magSlider/m2.jpg',
        info: [
            {
                icon: 'icons/magSlider/gearshift.svg',
                text: 'Manual'
            },
            {
                icon: 'icons/magSlider/seat.svg',
                text: '5 seats'
            },
            {
                icon: 'icons/magSlider/gas.svg',
                text: 'Gas'
            },
            {
                icon: 'icons/magSlider/engine.svg',
                text: '1600 Hp'
            },
            {
                icon: 'icons/magSlider/wheel.svg',
                text: 'Front'
            }]
    },
    {
        type: 'Magazyn Warszawa',
        name: 'Nazwa Firmy',
        price: 29,
        stars: 3.5,
        image: '/images/magSlider/m3.jpg',
        info: [
            {
                icon: 'icons/magSlider/gearshift.svg',
                text: 'Automatic'
            },
            {
                icon: 'icons/magSlider/seat.svg',
                text: '5 seats'
            },
            {
                icon: 'icons/magSlider/gas.svg',
                text: 'Gas'
            },
            {
                icon: 'icons/magSlider/engine.svg',
                text: '1600 Hp'
            },
            {
                icon: 'icons/magSlider/wheel.svg',
                text: 'Front'
            }]
    },
    {
        type: 'Magazyn Gdańśk',
        name: 'Nazwa Firmy',
        price: 32,
        stars: 4.9,
        image: '/images/magSlider/m4.jpg',
        info: [
            {
                icon: 'icons/magSlider/gearshift.svg',
                text: 'Manual'
            },
            {
                icon: 'icons/magSlider/seat.svg',
                text: '5 seats'
            },
            {
                icon: 'icons/magSlider/gas.svg',
                text: 'Gas'
            },
            {
                icon: 'icons/magSlider/engine.svg',
                text: '1600 Hp'
            },
            {
                icon: 'icons/magSlider/wheel.svg',
                text: 'Front'
            }]
    },
    {
        type: 'Magazyn Szczeciń',
        name: 'Nazwa Firmy',
        price: 32,
        stars: 4.9,
        image: '/images/magSlider/m5.jpg',
        info: [
            {
                icon: 'icons/magSlider/gearshift.svg',
                text: 'Manual'
            },
            {
                icon: 'icons/magSlider/seat.svg',
                text: '5 seats'
            },
            {
                icon: 'icons/magSlider/gas.svg',
                text: 'Gas'
            },
            {
                icon: 'icons/magSlider/engine.svg',
                text: '1600 Hp'
            },
            {
                icon: 'icons/magSlider/wheel.svg',
                text: 'Front'
            }]
    },]

export const CarSlider = () => {

    return (
        <motion.div
            variants={fadeIn('up',0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.2}}
            className='container mx-auto'>
            <Swiper breakpoints={{
                320: {slidesPerView: 1, spaceBetween: 15},
                640: {slidesPerView: 2, spaceBetween: 32},
                1260: {slidesPerView: 3, spaceBetween: 32},
            }}>
                {cars.map((car, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='max-w-[385px] max-h-[600px] h-full mx-auto sm:mx-0'>
                                <Image src={car.image}
                                       width={380}
                                       height={284}
                                       alt="car-image"/>
                                <div className='flex justify-between'>
                                    <div>
                                        <div className='text-secondary upppercase'>{car.type}</div>
                                        <h3 className='text-lg uppercase font-bold'>{car.name}</h3>
                                        <h3 className='mb-10 text-accent font-semibold uppercase'>{car.price}/day</h3>
                                    </div>
                                    <div className='flex gap-x-2 text-accent h-max'>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                        <FaStar/>
                                    </div>
                                </div>
                                <div className='flex gap-x-3'>
                                    {car.info.map((item, index) => {
                                        return <div className='flex flex-col items-center' key={index}>
                                            <div className='bg-primary w-12 h-12 rounded-full flex justify-center items-center mb-2'>
                                                <Image
                                                    src={item.icon}
                                                    width={24}
                                                    height={24}
                                                    alt="item icon"/>
                                            </div>
                                            <div className='text-[12px] uppercase'>
                                                {item.text}
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </motion.div>
    )
}