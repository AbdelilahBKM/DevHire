import Image from 'next/image';
import { jobProps } from './types';

const getData = async (): Promise <jobProps[]> => {
  const res = await fetch('http://localhost:8000/job-lists', {method: 'GET'});
  // await new Promise((resolve) => setTimeout(resolve, 2500));
  const data = await res.json();
  return data;
}

// const getjobList = async (): Promise <jobProps[]> => {
//   const res = await fetch('http://localhost:3000/api/jobList');
//   const data = await res.json();
//   return data;
// }
export default async function Home(){
  
  const jobs = await getData();

  return (
    <main className="text-gray-700 flex justify-center items-center">
      <div className="lg:w-[1340px] w-4/5">
      {jobs.map((job: jobProps) => (
        <div 
        className="relative flex flex-col lg:flex-row lg:items-center rounded mb-8 lg:mb-2 w-full h-fit lg:h-32 px-8 lg:px-4 pt-14 lg:py-2 shadow-lg bg-white" 
        key={job.id}>
          {job.featured && <div className="absolute left-0 top-0 rounded-s w-2 h-full border-l-4 border-gray-700"></div>}
          <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:w-2/3 pb-2 lg:pb-0">
            <Image src={job.logo} alt="logo" width={60} height={60} 
            className="lg:w-[75px] lg:h-[75px] absolute left-8 lg:left-0 top-[-15px] lg:relative"/>
            <div className="">
              <div className="flex lg:gap-2 items-center justify-between lg:justify-start">
                <div className="text-cyan-600 font-semibold text-xl lg:text-base">{job.company}</div>
                <div className="flex gap-2">
                  {job.new && <div className="text-white text-xs rounded-xl bg-cyan-600 h-fit px-2 py-1">NEW!</div>}
                  {job.featured && <div className="text-white text-xs rounded-xl bg-gray-700 h-fit px-2 py-1">FEATURED</div>}
                </div>
              </div>
              <div className="text-cyan-700 font-semibold text-lg w-full">{job.position}</div>
              <div className="flex gap-2 text-cyan-500">
                <div>{job.postedAt}</div>
                <div>.</div>
                <div>{job.contract}</div>
                <div>.</div>
                <div>{job.location}</div>
              </div>
            </div>
          </div>
          <div className="lg:hidden border-t border-cyan-400"></div>
          <div className="flex w-full items-center justify-start flex-wrap py-8 lg:justify-end gap-1">
            <div className="bg-slate-200 text-cyan-600 px-3 py-1 rounded cursor-pointer hover:bg-cyan-600 hover:text-white transition-colors" 
            key={job.role}>{job.role}</div>
            <div className="bg-slate-200 text-cyan-600 px-3 py-1 rounded cursor-pointer hover:bg-cyan-600 hover:text-white transition-colors" 
            key={job.level}>{job.level}</div>
            {job.languages.map((language: string) => (  
              <div className="bg-slate-200 text-cyan-600 px-3 py-1 rounded cursor-pointer hover:bg-cyan-600 hover:text-white transition-colors" 
              key={language}>{language}</div> 
            ))}
          </div>
        </div>
      ))}
      </div>
    </main>
  );
}
