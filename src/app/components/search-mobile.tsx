import {DateSelection} from "@/app/components/date-selection";
import {HoursSelection} from "@/app/components/hours-selection";
import {LocationSelection} from "@/app/components/location-selection";

export const SearchMobile = () => {


    return (
        <div className='xl:hidden'>
            <div className='container mx-auto'>
                <div>
                    <LocationSelection/>
                    <DateSelection/>
                    <HoursSelection/>
                    <div>
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}