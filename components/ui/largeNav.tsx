"use client"
import Link from "next/link";
import Image from "next/image";

export default function LargeNav(){
    return(
        <nav className="hidden lg:flex justify-between bg-transparent w-[1340px] h-[75px] border-b">
                <div className="flex items-center gap-2">
                    <Image src={'./images/Logo.svg'} alt="" width={32} height={32} />
                    <p className=" text-red-800 text-2xl">DevHire.ma</p>
                </div>
                <div className="flex items-center w-[300px] justify-between text-xl">
                    <Link 
                    className="flex items-center w-full border-b-2 transition-transform text-blue-700 border-blue-600 h-full justify-center" 
                    href={'/'}>job listings</Link>
                </div>
                <div className="flex items-center gap-1">
                    <Link 
                    className="flex items-center justify-center gap-1 w-[227px] h-[47px] bg-blue-700 rounded-lg hover:bg-blue-900
                     active:bg-white active:text-blue-900 transition-colors text-white text-lg" 
                    href={'/'}>
                        <p>Submit job for <span className="italic">$199</span></p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </Link>
                </div>
            </nav>
    );
}