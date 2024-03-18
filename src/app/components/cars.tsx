import {Brands} from "@/app/components/brands";
import {CarSlider} from "@/app/components/car-slider";


export const Cars = () => {
    return (
        <section className='h-screen flex items-center bg-yellow-200' id='cars'>
           <div className='container mx-auto'>
               <Brands/>
               <CarSlider/>
           </div>
        </section>
    )
}