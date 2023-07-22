"use client"
import { jobProps } from "@/app/types";
import JobDetails from '@/components/ui/jobDetails';
import SearchBox from "./search";
import { useEffect, useState, useContext } from "react";
import { filterContext } from "@/app/layout";

export interface jobsProps {
    jobs: jobProps[];
}

export default function JobListing({jobs} : jobsProps){
  const [search, setSearch ] = useState<string | null>(null);
  const [filteredJobs, setFilteredJobs] = useState<jobProps[]>(jobs);
  const {region, contract, tool} = useContext(filterContext);

    useEffect(() => {
        if(search){
            setFilteredJobs(jobs.filter((job) => 
            job.company.toLowerCase().includes(search.toLowerCase()) || job.position.toLowerCase().includes(search.toLowerCase())))
        }
        if(region){
            setFilteredJobs(filteredJobs.filter((job) => job.location.toLowerCase() === region))
        }
        if(contract){
            setFilteredJobs(filteredJobs.filter((job) => job.contract.toLowerCase() === contract))
        }
        if(tool){
            setFilteredJobs(filteredJobs.filter((job) =>
            job.tools.some((tools) => tools.value === tool)
            ));

        } 
        if(!search && !region && !contract && !tool) {
            setFilteredJobs(jobs);
        }
        
    }, [search, region, contract, tool, filteredJobs, jobs]);
    return (
        <> 
        <SearchBox setSearch={setSearch} />

        <div className="lg:w-[1340px] w-4/5">
            {filteredJobs.map((job: jobProps) => (
                <JobDetails job={job} key={job.id}/>
            ))}
        </div>
        </>
    );
}