"use client"
import { NavBar } from "./navbar";
import SearchBox from "./search";
import { createContext, useState, Dispatch, SetStateAction} from "react";


export interface MainContextInterface {
    isMainMenu: boolean,
    setIsMainMenu: Dispatch<SetStateAction<boolean>>
}

const defaultState = {
    isMainMenu: true,
    setIsMainMenu: (prev: true) => {}
} as MainContextInterface;

export const main = createContext(defaultState);

export default function Header(){
    const [isMainMenu, setIsMainMenu] = useState<boolean>(true);
    
    return(
        <div className="relative h-[310px] mx-4 my-4">
            <div className="absolute rounded-2xl inset-0 bg-white"></div>
            <main.Provider value={{isMainMenu, setIsMainMenu}} >
                <NavBar />
            </main.Provider>
            <div className="absolute top-[100px] h-[75px] w-full flex items-center justify-center">
                <div className="text-center w-full text-gray-800">
                    <h1 className="text-3xl"><span className="text-blue-500">Tech Careers</span> for Students and Graduates :</h1>
                    <span className="text-gray-400 font-extralight">Find Software Engineering Opportunities</span>
                </div>
            </div>
            <SearchBox />
        </div>
    );
}