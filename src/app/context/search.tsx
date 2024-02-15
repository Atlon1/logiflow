'use client'

import {createContext, useContext, useState} from "react";
import {SearchContextType} from "../../../@types/context";

export const SearchContext = createContext<SearchContextType | null>(null)


export const SearchContextProvider = ({children}: { children: React.ReactNode }) => {
    const [searchActive, setSearchActive] = useState(false)

    return (
        <SearchContextProvider>{children}</SearchContextProvider>
    )
}

export const useSearchContext = () => useContext(SearchContext)