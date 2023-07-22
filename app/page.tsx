import JobListing from '@/components/ui/jobListing';
import { jobProps } from './types';

const getData = async (): Promise <jobProps[]> => {
  const res = await fetch('http://localhost:8000/job-lists', {method: 'GET', cache: 'no-store' });
  // await new Promise((resolve) => setTimeout(resolve, 2500));
  const data = await res.json();
  return data;
}

export default async function Home(){
  
  const jobs = await getData();

  return (
    <main className="relative text-gray-700 flex justify-center items-center lg:mt-[150px]">
      <JobListing jobs={jobs} />
    </main>
  );
}
