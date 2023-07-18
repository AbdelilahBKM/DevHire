import { NavBar } from "./navbar";


export default function Header(){
    
    return(
        <div className="relative h-[310px] mx-4 my-4">
            <div className="absolute rounded-2xl inset-0 bg-white"></div>
            <NavBar />
            <div className="absolute top-[150px] h-[75px] w-full flex items-center justify-center">
                <div className="text-center w-full text-gray-800 h-40">
                    <h1 className="text-4xl mb-4"><span className="text-blue-500">Tech Careers</span> for Students and Graduates</h1>
                    <span className="text-gray-400 font-extralight text-xl">Find Software Engineering Opportunities</span>
                </div>
            </div>
        </div>
    );
}