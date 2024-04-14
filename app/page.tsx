import JobListing from '@/components/ui/jobListing'
import {Job, Technology, JobData, CompanyData} from './types'

const api_url: string = "https://dev-hire-api.cyclic.app";

const getJobs = async ():Promise<Job[]> => {
  const endpoint: string = `${api_url}/Job/getAll`;
  const res  = await fetch(endpoint);
  const data = await res.json();
  const fetchedJobs: JobData[] = data.jobs;
  const jobs : Job[] = await Promise.all(fetchedJobs.map(async (job: JobData) : Promise<Job> => {
      const response = await fetch(`${api_url}/Company/get/${job.company}`);
      const data = await response.json();
      const company: CompanyData = data.company;
      const techIds = job.technologies;
      const technoglogies: Technology[] = await Promise.all(techIds.map(async (id) : Promise<Technology> =>{
          const response = await fetch(`${api_url}/Technology/get/${id}`);
          const data = await response.json();
          return data.technology;
        }));
      return {
        _id: job._id,
        position: job.position,
        role: job.role,
        level: job.level,
        location: job.location,
        contractType: job.contractType,
        technologies: technoglogies,
        company: company,
        createdAt: job.createdAt,
        updatedAt: job.updatedAt
      }
  }));

  return jobs;
}

export default async function Home(): Promise<JSX.Element>{
  
  const jobs = await getJobs();

  return (
    <main className="relative text-gray-700 flex justify-center items-center lg:mt-[150px]">
      <JobListing jobs={jobs} />
    </main>
  )
}
