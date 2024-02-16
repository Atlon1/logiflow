'use client'

import React, {createContext, useContext, useState} from "react";
import {SearchContextType} from "../../../@types/context";

export const SearchContext = createContext<SearchContextType | null>(null)


export const SearchContextProvider = ({children}: { children: React.ReactNode }) => {
    const [searchActive, setSearchActive] = useState(false)



    return (
        <SearchContext.Provider value={{searchActive, setSearchActive}}>
            {children}
        </SearchContext.Provider>
    )
}

export const useSearchContext = () => useContext(SearchContext)