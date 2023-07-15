"use client"
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { main } from "./header";
import { LocationsComboBox } from "./comboBox/locationsCB";
import { ContractComboBox } from "./comboBox/contractCB";
import { ToolsComboBox } from "./comboBox/toolsCB";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function SmallNav(){
    const {isMainMenu, setIsMainMenu} = useContext(main);

    return(
        <nav className="flex items-center justify-between lg:hidden h-[75px] w-11/12">
            <div className="flex items-center gap-2">
                    <Image src={'./images/Logo.svg'} alt="" width={32} height={32} />
                    <p className=" text-red-800 text-2xl">DevHire.ma</p>
            </div>
            <Sheet>
                <SheetTrigger>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                        {isMainMenu ? 
                        <div className="flex items-center w-full justify-between text-xl">
                            <Link 
                            className="flex items-center w-1/2 border-b-2 transition-transform text-blue-700 border-blue-600 h-full justify-center" 
                            href={'/'}>Jobs</Link>
                            <Link onClick={() => setIsMainMenu((prev: boolean) => !prev)}
                            className="flex items-center w-1/2 hover:text-blue-700 transition ease-in-out border-blue-600 h-full justify-center" 
                            href={'/engineers'}>Engineers</Link>
                        </div> : 
                        <div className="flex items-center w-full justify-between text-xl">
                            <Link onClick={() => setIsMainMenu((prev: boolean) => !prev)}
                            className="flex items-center w-1/2 hover:text-blue-700 transition ease-in-out border-blue-600 h-full justify-center" 
                            href={'/'}>Jobs</Link>
                            <Link 
                            className="flex items-center w-1/2 border-b-2 transition-transform text-blue-700 border-blue-600 h-full justify-center" 
                            href={'/engineers'}>Engineers</Link>
                        </div>
                    }
                    </SheetHeader>
                    <div className="mx-2 my-4 h-screen border rounded-lg py-2 px-4">
                        <div className="text-gray-600 flex justify-center items-center gap-3 h-14 text-xl border-b" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                            </svg>
                            <p>Filter Settings</p>
                        </div>
                        <div className="flex flex-col justify-start gap-10 mt-10 h-96">
                            <LocationsComboBox />
                            <ContractComboBox />
                            <ToolsComboBox />
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </nav>
    );
}