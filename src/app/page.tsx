import {Header} from './components/header';
import {Hero} from "@/app/components/hero";
import {Cars} from "@/app/components/cars";
import {About} from "@/app/components/about";
import {Why} from "@/app/components/why";
import {Testimonial} from "@/app/components/testimonial";
import {Cta} from "@/app/components/cta";
import {Footer} from "@/app/components/footer";
import {BackToTop} from "@/app/components/back-to-top";


export default function Home() {
    return (
        <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
            <Header/>
            <Hero/>
            <Cars/>
            <About/>
            <Why/>
            <Testimonial/>
            <Cta/>
            <Footer/>
            <BackToTop/>
            <div className='h-[4000px]'>

            </div>
        </main>
    );
}
