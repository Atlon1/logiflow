import {Brands} from "@/app/components/brands";
import {CarSlider} from "@/app/components/car-slider";


export const Magazine = () => {
    return (
        <section className='h-screen flex items-center' id='cars'>
           <div className='container mx-auto'>
               <Brands/>
               <CarSlider/>
           </div>
        </section>
    )
}