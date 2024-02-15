'use client'

import {createContext, useContext, useState} from "react";

export const SearchContext = createContext({})


export const SearchContextProvider = ({children, value} : {children: React.ReactNode, value: unknown}) => {
 const [searchActive, setSearchActive] = useState(false)

    return (
        <SearchContextProvider value={{searchActive, setSearchActive}}>{children}</SearchContextProvider>
    )
}

export const useSearchContext = () => useContext(SearchContext)