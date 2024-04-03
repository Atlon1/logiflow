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
            className='section flex items-center bg-pink-200'
            id='about'
            ref={ref}
        >
            About
        </section>
    )
}