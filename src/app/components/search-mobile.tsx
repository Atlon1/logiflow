import {DateSelection} from "@/app/components/date-selection";
import {HoursSelection} from "@/app/components/hours-selection";
import {LocationSelection} from "@/app/components/location-selection";

export const SearchMobile = () => {


    return (
        <div className='xl:hidden'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-4'>
                    <LocationSelection/>
                    <DateSelection/>
                    <HoursSelection/>
                    <div className='flex items-center px-6'>
                        <button className='btn btn-sm btn-accent w-[164px] mx-auto'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}