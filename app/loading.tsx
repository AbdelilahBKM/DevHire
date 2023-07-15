import { Skeleton } from "@/components/ui/skeleton";

export default function Loading(){
    const array = Array.from({length: 4}, (_:any, i:number) => i + 1);
    return (
      <main className="text-gray-700 flex justify-center items-center lg:mt-[150px]">
        {/* <Skeleton className="w-[100px] h-[20px] rounded-full" /> */}
        <div className="lg:w-[1340px] w-4/5">
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