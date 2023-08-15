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

export default function FilterSheet(){
    return (
        <div className="flex items-center justify-center lg:hidden">
                <Sheet>
                    <SheetTrigger>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                    </SheetTrigger>
                    <SheetContent side={"left"} className="flex items-center">
                        <div className="h-fit border rounded-lg pt-2 pb-14 px-4 w-full bg-slate-50 shadow">
                            <div className="text-gray-600 flex justify-center items-center gap-3 h-14 text-xl border-b" >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                                </svg>
                                <p>Filter Settings</p>
                            </div>
                            <div className="flex flex-col justify-start gap-8 h-fit mt-10">
                                <LocationsComboBox />
                                <ContractComboBox />
                                <ToolsComboBox />
                                <SheetClose asChild>
                                    <Button variant="outline" className="text-lg text-gray-600 hover:bg-gray-400 border-2" type="submit">
                                    Save changes</Button>
                                </SheetClose>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
    )
}