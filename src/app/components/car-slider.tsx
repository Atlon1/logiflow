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
    }, {
        type: 'Sedan',
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
    }, {
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
    }, {
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
    },]

export const CarSlider = () => {

    return (
        <div>
            <h1>Car Slider</h1>
        </div>
    )
}