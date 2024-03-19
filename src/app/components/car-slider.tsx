import 'swiper/css'
import Image from "next/image";
import {FaStar, FaStarHalfAlt, FaRegStar} from "react-icons/fa";
import {motion} from "framer-motion";
import {fadeIn} from "../../../variants";


const cars = [
    {
        type: 'Hatchback',
        name: 'Ford Focus',
        price: 29,
        stars: 3.5,
        image: 'images/carSlider/car01.svg',
        info: [
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Manual'
            },
            {
                icon: 'icons/carSlider/seat.svg',
                text: '5 seats'
            },
            {
                icon: 'icons/carSlider/gas.svg',
                text: 'Gas'
            },
            {
                icon: 'icons/carSlider/engine.svg',
                text: '1600 Hp'
            },
            {
                icon: 'icons/carSlider/wheel.svg',
                text: 'Front'
            }]
    },
    {
        type: 'Sedan',
        name: 'Toyota Corolla',
        price: 25,
        stars: 5,
        image: 'images/carSlider/car02.svg',
        info: [
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Manual'
            },
            {
                icon: 'icons/carSlider/seat.svg',
                text: '5 seats'
            },
            {
                icon: 'icons/carSlider/gas.svg',
                text: 'Gas'
            },
            {
                icon: 'icons/carSlider/engine.svg',
                text: '1600 Hp'
            },
            {
                icon: 'icons/carSlider/wheel.svg',
                text: 'Front'
            }]
    },
    {
        type: 'SUV',
        name: 'Honda CR-V',
        price: 29,
        stars: 3.5,
        image: 'images/carSlider/car03.svg',
        info: [
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Automatic'
            },
            {
                icon: 'icons/carSlider/seat.svg',
                text: '5 seats'
            },
            {
                icon: 'icons/carSlider/gas.svg',
                text: 'Gas'
            },
            {
                icon: 'icons/carSlider/engine.svg',
                text: '1600 Hp'
            },
            {
                icon: 'icons/carSlider/wheel.svg',
                text: 'Front'
            }]
    },
    {
        type: 'Convertible',
        name: 'Mazda MX-5',
        price: 32,
        stars: 4.9,
        image: 'images/carSlider/car02.svg',
        info: [
            {
                icon: 'icons/carSlider/gearshift.svg',
                text: 'Manual'
            },
            {
                icon: 'icons/carSlider/seat.svg',
                text: '5 seats'
            },
            {
                icon: 'icons/carSlider/gas.svg',
                text: 'Gas'
            },
            {
                icon: 'icons/carSlider/engine.svg',
                text: '1600 Hp'
            },
            {
                icon: 'icons/carSlider/wheel.svg',
                text: 'Front'
            }]
    },]

export const CarSlider = () => {

    return (
        <div>
            <h1>Car Slider</h1>
        </div>
    )
}