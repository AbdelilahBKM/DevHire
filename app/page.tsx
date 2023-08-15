import JobListing from '@/components/ui/jobListing';
import { Job, Company, User,  } from './types';


const getJobs = async () => {
  const res = await fetch("http://localhost:3000/api/getJobs")
  return res.json()
}

export default async function Home(){
  
  const data = await getJobs()
  const {jobs} = data

  return (
    <main className="relative text-gray-700 flex justify-center items-center lg:mt-[150px]">
      <JobListing jobs={jobs} />
    </main>
  );
}
