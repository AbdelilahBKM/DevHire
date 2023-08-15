import { Dispatch, SetStateAction, useState, useRef } from "react";
import { ContractComboBox } from "./comboBox/contractCB";
import { LocationsComboBox } from "./comboBox/locationsCB";
import { ToolsComboBox } from "./comboBox/toolsCB";
import SheetMenu from "./filterSheet";
import { Input } from "postcss";


export interface setSearchAction {
    setSearch: Dispatch<SetStateAction<string | null>>
}


export default function SearchBox({setSearch}: setSearchAction){
    const searchRef = useRef<HTMLInputElement>(null);
    
    const handleClick = () => {
        setSearch(() => searchRef.current?.value !== undefined ? searchRef.current?.value : null);
    }
    const handleKeyPress = (event : React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
            handleClick()
        }
    }
    return(
        <main className="w-full z-10 absolute top-[-88px] lg:top-[-200px] flex justify-center items-center font-extralight">
            <div className="w-11/12 lg:w-[1340px] h-fit lg:h-[150px] flex flex-col gap-2 lg:flex-row bg-white rounded-lg lg:shadow-md">  
                <div className="w-full lg:w-[547px] lg:border border-blue-600 rounded-lg flex gap-3 items-center">
                    <SheetMenu />
                    <div className="flex gap-1 items-center w-full lg:mx-3 h-[60px] rounded-lg bg-slate-100 pr-2">
                        <input onKeyDown={handleKeyPress}
                        ref={searchRef} 
                        className="h-full w-3/4 flex items-center px-4 text-xl text-gray-700 font-light outline-none overflow-hidden bg-transparent
                         placeholder:text-base placeholder:text-gray-700"  
                        type="text" name="searchBar" id="searchBar" placeholder="Search for a job..." />
                        <button onClick={handleClick}
                        className="flex items-center justify-center gap-1 rounded-full lg:rounded-lg bg-blue-700 text-white py-2 w-1/4 hover:bg-blue-900 transition-colors" 
                        type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <p className="hidden lg:block">show results</p>
                        </button>
                    </div>
                </div>
                <div className="hidden lg:flex items-center px-10 justify-start gap-10 w-full lg:w-[793px]">
                    <LocationsComboBox />
                    <ContractComboBox />
                    <ToolsComboBox />
                </div>
            </div>
        </main>
    );
}