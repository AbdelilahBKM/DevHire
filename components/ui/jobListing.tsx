"use client"

import { Job } from "@/app/types"
import JobDetails from '@/components/ui/jobDetails'
import SearchBox from "./search"
import { useEffect, useState, useContext } from "react"
import { filterContext } from "@/app/layout"

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
  const {region, contract, tool} = useContext(filterContext)

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
        <SearchBox setSearch={setSearch} />

        <div className="lg:w-[1340px] w-11/12">
            {filteredJobs.map((job: Job) => (
                <JobDetails job={job} key={job.id}/>
            ))}
        </div>
        </>
    );
}