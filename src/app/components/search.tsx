"use client";
import {useContext} from "react";
import {SearchContext} from "@/app/context/search";
import {LocationSelection} from "@/app/components/location-selection";
import {DateSelection} from "@/app/components/date-selection";

export const Search = () => {

    const {searchActive} = useContext<any>(SearchContext);

    return (
        <div
            className={`${searchActive ? 'bg-white rounded-none xl:h-[80px]' : 'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'} hidden xl:block w-full relative shadow-lg`}>
            <div className='xl:h-full flex items-center px-6 xl:px-0'>
                <LocationSelection/>
                <DateSelection/>
            </div>
        </div>
    )
}