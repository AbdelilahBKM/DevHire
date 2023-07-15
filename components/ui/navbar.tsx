"use client"
import LargeNav from "./largeNav";
import SmallNav from "./smallNav";


export function NavBar(){
    
    return (
        <main className="absolute flex justify-center top-0 w-full bg-transparent">
            <LargeNav />
            <SmallNav />
        </main>
    );
}