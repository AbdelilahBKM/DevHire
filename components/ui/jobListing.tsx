"use client"
import { jobProps } from "@/app/types";
import JobDetails from '@/components/ui/jobDetails';
import SearchBox from "./search";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createContext } from "react";

export interface jobsProps {
    jobs: jobProps[];
}

export interface filterContextProps {
    setSearch: Dispatch<SetStateAction<string | null>>;
    setRegion: Dispatch<SetStateAction<string | null>>;
    setContract: Dispatch<SetStateAction<string | null>>;
    setLang: Dispatch<SetStateAction<string | null>>;
} 

const defaultFilter = {
    setSearch: () => {},
    setRegion: () => {},
    setContract: () => {},
    setLang: () => {},
} as filterContextProps;

export const filterContext = createContext(defaultFilter);

export default function JobListing({jobs} : jobsProps){
    const [search, setSearch ] = useState<string | null>(null);
    const [region, setRegion] = useState<string | null>(null);
    const [contract, setContract] = useState<string | null>(null);
    const [lang, setLang] = useState<string | null>(null);
    const [filteredJobs, setFilteredJobs] = useState<jobProps[]>([]);

    useEffect(() => {
        if(search){
            setFilteredJobs(jobs.filter((job) => 
            job.company.toLowerCase().includes(search.toLowerCase()) || job.position.toLowerCase().includes(search.toLowerCase())))
        }
        if(region){
            setFilteredJobs(jobs.filter((job) => job.location.toLowerCase() === region))
        }
        if(contract){
            setFilteredJobs(jobs.filter((job) => job.contract.toLowerCase() === contract))
        }
        if(lang){
            setFilteredJobs(jobs.filter((job) =>
            job.languages.some((language) => language.toLowerCase() === lang.toLowerCase())
            ));

        } 
        if(!search && !region && !contract) {
            setFilteredJobs(jobs);
        }
        
    }, [search, region, contract, lang, jobs]);
    return (
        <> 
        <filterContext.Provider value={{setSearch, setRegion, setContract, setLang}}>
            <SearchBox />
        </filterContext.Provider>
        <div className="lg:w-[1340px] w-4/5">
            {filteredJobs.map((job: jobProps) => (
                <JobDetails job={job} key={job.id}/>
            ))}
        </div>
        </>
    );
}