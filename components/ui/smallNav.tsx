"use client"
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { LocationsComboBox } from "./comboBox/locationsCB";
import { ContractComboBox } from "./comboBox/contractCB";
import { ToolsComboBox } from "./comboBox/toolsCB";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./button";


export default function SmallNav(){
    return(
        <nav className="flex items-center justify-between lg:hidden h-[75px] w-11/12">
            <div className="flex items-center gap-2">
                    <Image src={'./images/Logo.svg'} alt="" width={32} height={32} />
                    <p className=" text-red-800 text-2xl">DevHire.ma</p>
            </div>
            <div className="flex items-center gap-4">
                <Link className="border-blue-200 border rounded-full flex justify-center relative" href={'/'}>
                    <Button className="text-blue-500 w-full h-full" variant="ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                    </Button>
                </Link>
            </div>
        </nav>
    );
}