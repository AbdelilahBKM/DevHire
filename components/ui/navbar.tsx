"use client"
import LargeNav from "./largeNav";
import SmallNav from "./smallNav";
import { createContext, useState, Dispatch, SetStateAction} from "react";

export interface MainContextInterface {
    isMainMenu: boolean,
    setIsMainMenu: Dispatch<SetStateAction<boolean>>
}

export function NavBar(){
  
    return (
        <main className="absolute flex justify-center top-0 w-full bg-transparent">
                <LargeNav />
                <SmallNav />
        </main>
    );
}