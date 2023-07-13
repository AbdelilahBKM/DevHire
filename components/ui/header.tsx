import Image from "next/image";

export default function Header(){
    return(
        <div className="relative h-32">
            <Image src={'./images/bg-header-desktop.svg'} alt="" width={100} height={100}
            className="absolute inset-0 w-full object-cover hidden lg:flex"/>
            <Image src={'./images/bg-header-mobile.svg'} alt="" width={100} height={100}
            className="absolute inset-0 w-full object-cover flex lg:hidden"/>
        </div>
    );
}