"use client"

import { Job } from "@/app/types"
import JobDetails from '@/components/ui/jobDetails'
import SearchBox from "./search"
import SheetMenu from "./filterSheet"
import { 
  Dispatch, 
  SetStateAction, 
  createContext, 
  useState,
  useEffect
} from 'react';

interface filterContextProps {
  region: string | null
  contract: string | null
  tool: string | null
}
const defaultFilterState = {
  region: null,
  contract: null,
  tool: null
} as filterContextProps

export const filterContext = createContext(defaultFilterState);

interface setFilterContextProps {
  setRegion: Dispatch<SetStateAction<string | null>>
  setContract: Dispatch<SetStateAction<string | null>>
  setTool: Dispatch<SetStateAction<string | null>>
} 

const defaultFilterFunctions = {
  setRegion: () => {},
  setContract: () => {},
  setTool: () => {},
} as setFilterContextProps

export const setFilterContext = createContext(defaultFilterFunctions)
export interface jobsProps {
    jobs: Job[];
}

export default function JobListing(
    {
        jobs
    } 
    : jobsProps
){

  const [search, setSearch ] = useState<string | null>(null)
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs)
  const [region, setRegion] = useState<string | null>(null)
  const [contract, setContract] = useState<string | null>(null)
  const [tool, setTool] = useState<string | null>(null)

  useEffect(() => {
    let filteredJobsResult = jobs
  
    if (search) {
      filteredJobsResult = filteredJobsResult.filter(
        (job) =>
          job.company.name.toLowerCase().includes(search.toLowerCase()) ||
          job.position.toLowerCase().includes(search.toLowerCase())
      )
    }
    if (region) {
      filteredJobsResult = filteredJobsResult.filter(
        (job) => job.location.toLowerCase() === region
      );
    }
    if (contract) {
      filteredJobsResult = filteredJobsResult.filter(
        (job) => job.contractType.toLowerCase() === contract
      );
    }
    if (tool) {
      filteredJobsResult = filteredJobsResult.filter((job) =>
        job.technologies.some((tech) => tech.value === tool)
      );
    }
  
    if (!search && !region && !contract && !tool) {
      filteredJobsResult = jobs;
    }
  
    setFilteredJobs(filteredJobsResult);
  }, [search, region, contract, tool, jobs])
  
    return (
        <> 
        <setFilterContext.Provider value={{setRegion, setContract, setTool}}>
            <filterContext.Provider value={{region, contract, tool}}>

              <SearchBox setSearch={setSearch} />
              <div className="lg:w-[1340px] w-11/12">
                  {filteredJobs.map((job: Job) => (
                    <JobDetails job={job} key={job.id}/>
                    ))}
              </div>
            </filterContext.Provider>
          </setFilterContext.Provider>
        </>
    );
}