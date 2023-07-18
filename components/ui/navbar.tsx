"use client"
import LargeNav from "./largeNav";
import SmallNav from "./smallNav";
import { createContext, useState, Dispatch, SetStateAction} from "react";

export interface MainContextInterface {
    isMainMenu: boolean,
    setIsMainMenu: Dispatch<SetStateAction<boolean>>
}

const defaultState = {
    isMainMenu: true,
    setIsMainMenu: () => {}
} as MainContextInterface;

export const main = createContext(defaultState);

export function NavBar(){
    const [isMainMenu, setIsMainMenu] = useState<boolean>(true);
    
    return (
        <main className="absolute flex justify-center top-0 w-full bg-transparent">
            <main.Provider value={{isMainMenu, setIsMainMenu}} >
                <LargeNav />
                <SmallNav />
            </main.Provider>
        </main>
    );
}