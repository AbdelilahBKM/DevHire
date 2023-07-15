"use client"
import { NavBar } from "./navbar";
import SearchBox from "./search";
import { useState } from "react";

export default function Header(){
    const [isMainMenu, setIsMainMenu] = useState(true);

    return(
        <div className="relative h-[310px] mx-4 my-4">
            {/* <Image src={'./images/bg-header-desktop.svg'} alt="" width={100} height={100}
            className="absolute inset-0 w-full object-cover hidden lg:flex"/>
            <Image src={'./images/bg-header-mobile.svg'} alt="" width={100} height={100}
            className="absolute inset-0 w-full object-cover flex lg:hidden"/> */}
            <div className="absolute rounded-2xl inset-0 bg-white"></div>
            <NavBar jobs={isMainMenu} setJobs={setIsMainMenu}/>
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