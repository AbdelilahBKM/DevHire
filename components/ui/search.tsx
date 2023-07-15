import { ContractComboBox } from "./comboBox/contractCB";
import { LocationsComboBox } from "./comboBox/locationsCB";
import { ToolsComboBox } from "./comboBox/toolsCB";


export default function SearchBox(){
    
    return(
        <main className="w-full z-10 absolute bottom-4 lg:bottom-[-100px] flex justify-center items-center font-extralight">
            <div className="border w-11/12 lg:w-[1340px] h-fit lg:h-[150px] flex flex-col lg:flex-row bg-white rounded-lg shadow">  
                <div className="w-full lg:w-[547px] lg:border border-blue-600 rounded-lg flex justify-between items-center">
                    <div className="flex gap-1 items-center w-full lg:mx-3 h-[60px] rounded-lg bg-slate-100 pr-2">
                        <input 
                        className="h-full w-3/4 flex items-center px-4 text-xl text-gray-700 font-light outline-none overflow-hidden bg-transparent
                         placeholder:text-base placeholder:text-gray-700"  
                        type="text" name="searchBar" id="searchBar" placeholder="Search for a job..." />
                        <button className="flex items-center justify-center gap-1 rounded-lg bg-blue-700 text-white py-2 w-1/4 hover:bg-blue-900 transition-colors" 
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