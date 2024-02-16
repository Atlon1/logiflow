"use client";
import {useContext} from "react";
import {SearchContext} from "@/app/context/search";
export const Search = () => {

const {setSearchActive} = useContext<any>(SearchContext);

    return (
        <div className={`${setSearchActive 
            ? 'bg-white rounded-none xl:h-[80px]' 
            : 'bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]'} 
            hidden xl:block w-full relative shadow-lg}`}>
            Search
        </div>
    )
}