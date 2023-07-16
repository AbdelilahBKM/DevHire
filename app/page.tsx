import Image from 'next/image';
import Link from 'next/link';
import { jobProps } from './types';
import JobDetails from '@/components/ui/jobDetails';

const getData = async (): Promise <jobProps[]> => {
  const res = await fetch('http://localhost:8000/job-lists', {method: 'GET'});
  // await new Promise((resolve) => setTimeout(resolve, 2500));
  const data = await res.json();
  return data;
}

export default async function Home(){
  
  const jobs = await getData();

  return (
    <main className="text-gray-700 flex justify-center items-center lg:mt-[150px]">
      <div className="lg:w-[1340px] w-4/5">
      {jobs.map((job: jobProps) => (
        <JobDetails job={job} key={job.id}/>
      ))}
      </div>
    </main>
  );
}
