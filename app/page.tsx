import JobListing, { jobsProps } from '@/components/ui/jobListing'
import { Job } from './types'


// const getJobs = async () => {
//   const API_URL = process.env.API_URL
//   const res = await fetch(`${API_URL}/api/getJobs`)
//   return res.json()
// }

const getJobs = async () => {
  const endpoint = "http://localhost:8000/companies";
  const res = await fetch(endpoint);
  return res.json();
}

export default async function Home(){
  
  const data = await getJobs()
  const jobs :Job[] = data;

  return (
    <main className="relative text-gray-700 flex justify-center items-center lg:mt-[150px]">
      <JobListing jobs={jobs} />
    </main>
  )
}
