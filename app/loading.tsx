"use client"
import { Skeleton } from "@/components/ui/skeleton";
import { LocationsComboBox } from "@/components/ui/comboBox/locationsCB";
import { ContractComboBox } from "@/components/ui/comboBox/contractCB";
import { ToolsComboBox } from "@/components/ui/comboBox/toolsCB";
export default function Loading(){
    const array = Array.from({length: 4}, (_:any, i:number) => i + 1);
    return (
      <main className="text-gray-700 flex justify-center items-center lg:mt-[150px]">
        {/* <Skeleton className="w-[100px] h-[20px] rounded-full" /> */}
        <div className="lg:w-[1340px] w-4/5">
        <div className="w-full z-10 absolute top-[-88px] lg:top-[-200px] flex justify-center items-center font-extralight">
            <div className="border w-11/12 lg:w-[1340px] h-fit lg:h-[150px] flex flex-col lg:flex-row bg-white rounded-lg shadow">  
                <div className="w-full lg:w-[547px] lg:border border-blue-600 rounded-lg flex justify-between items-center">
                    <div className="flex gap-1 items-center w-full lg:mx-3 h-[60px] rounded-lg bg-slate-100 pr-2">
                        <input 
                        className="h-full w-3/4 flex items-center px-4 text-xl text-gray-700 font-light outline-none overflow-hidden bg-transparent
                         placeholder:text-base placeholder:text-gray-700"  
                        type="text" name="searchBar" id="searchBar" placeholder="Search for a job..." />
                        <button
                        className="flex items-center justify-center gap-1 rounded-lg bg-blue-700 text-white py-2 w-1/4 hover:bg-blue-900 transition-colors" 
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
        </div>
        {array.map((id: number) => (
          <div 
          className="relative flex flex-col lg:flex-row lg:items-center rounded mb-8 lg:mb-2 w-full h-[150px] lg:h-32 px-8 lg:px-4 pt-14 lg:py-2 shadow-lg bg-white" 
          key={id}>
            <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:w-2/3 pb-2 lg:pb-0">
              <Skeleton className="w-[50px] h-[50px] lg:w-[75px] lg:h-[75px] rounded-full absolute left-8 lg:left-0 top-[-10px] lg:relative" />
              <div className=" mt-2">
                <div className="flex lg:gap-2 items-center justify-between mb-2">
                  <Skeleton className="w-[100px] h-[20px] rounded-full" />
                </div>
                <Skeleton className="w-[200px] h-[25px] rounded-full" />
                <div className="flex gap-2 text-cyan-500 mt-2">
                  <Skeleton className="w-[75px] h-[10px] rounded-full" />
                  <div>.</div>
                  <Skeleton className="w-[75px] h-[10px] rounded-full" />
                  <div>.</div>
                  <Skeleton className="w-[75px] h-[10px] rounded-full" />
                </div>
              </div>
            </div>

            <div className="flex w-full items-center justify-end gap-2">
              
            </div>
          </div>
        ))}
        </div>
    </main>
    );
}