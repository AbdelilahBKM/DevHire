"use client"
import Image from "next/image";
import Link from "next/link";
import { jobProps } from "@/app/types";
import { Button } from "./button";
import { useState } from "react";

export interface jobPropreties {
    job: jobProps
}

export default function JobDetails({job}: jobPropreties){
    const [isActive, setIsActive] = useState(false);
    
    return (
        <div className="relative rounded shadow-lg bg-white mb-8 lg:mb-2 px-8 lg:px-10 pt-14 lg:pt-4 pb-px h-auto">
            {job.featured && <div className="absolute left-0 top-0 rounded-s w-2 h-full border-l-4 border-gray-700"></div>}
            <div className="flex flex-col lg:flex-row lg:items-center w-full h-fit pb-2 lg:pb-0">                
                <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:w-1/2">
                    <Image src={job.logo} alt="logo" width={60} height={60} 
                    className="lg:w-[75px] lg:h-[75px] absolute left-8 lg:left-0 top-[-15px] lg:top-0 lg:relative"/>
                    <div className=" flex flex-col gap-2">
                        <div className="flex lg:gap-2 items-center justify-between lg:justify-start">
                            <Link href={'/' + job.id}>
                            <div className="text-cyan-600 font-semibold text-xl lg:text-base cursor-pointer hover:underline transition">{job.company}
                            </div>
                            </Link>
                            <div className="flex gap-2">
                            {job.new && <div className="text-white text-xs rounded-xl bg-cyan-600 h-fit px-2 py-1">NEW!</div>}
                            {job.featured && <div className="text-white text-xs rounded-xl bg-gray-700 h-fit px-2 py-1">FEATURED</div>}
                            </div>
                        </div>
                        <div onClick={() => setIsActive(prev => !prev)}
                        className="text-cyan-700 font-light text-2xl w-full cursor-pointer hover:text-cyan-950 transition-colors">{job.position}</div>
                        <div className="flex gap-2 text-cyan-500 cursor-pointer">
                            <div>{job.postedAt}</div>
                            <div>.</div>
                            <div>{job.contract}</div>
                            <div>.</div>
                            <div>{job.location}</div>
                        </div>
                    </div>
                </div>
                
                <div className="lg:hidden border-t border-cyan-400"></div>
                <div className="flex items-center w-1/2">
                    <div className="flex w-full lg:w-[70%] items-center justify-start flex-wrap py-8 gap-1">
                        <div className="bg-slate-200 text-cyan-600 px-3 py-1 rounded cursor-pointer hover:bg-cyan-600 hover:text-white transition-colors" 
                        key={job.role}>{job.role}</div>
                        <div className="bg-slate-200 text-cyan-600 px-3 py-1 rounded cursor-pointer hover:bg-cyan-600 hover:text-white transition-colors" 
                        key={job.level}>{job.level}</div>
                        {job.tools.map((tool: {name: string, value: string}) => (  
                            <div className="bg-slate-200 text-cyan-600 px-3 py-1 rounded cursor-pointer hover:bg-cyan-600 hover:text-white transition-colors" 
                            key={tool.value}>{tool.name}</div> 
                            ))}
                    </div>
                    <div className="w-[30%] flex justify-end">
                        {isActive ? 
                        <Button key={job.id} onClick={() => setIsActive(prev => !prev)} 
                        className="hidden lg:block text-lg font-light text-blue-700 hover:text-blue-700 border border-blue-700" 
                        variant="ghost">Less Details</Button> 
                        :
                        <Button key={job.id} onClick={() => setIsActive(prev => !prev)} 
                        className="hidden lg:block text-lg font-light text-blue-700 hover:text-blue-700" 
                        variant="ghost">More Details</Button>  
                        }
                    </div>
                </div>
          </div>
          <div className="w-full flex justify-end my-2 px-3">
                {isActive ? 
                <Button key={job.id} onClick={() => setIsActive(prev => !prev)} 
                className="block lg:hidden text-lg font-light text-blue-700 hover:text-blue-700 border border-blue-700" 
                variant="ghost">Less Details</Button> 
                :
                <Button key={job.id} onClick={() => setIsActive(prev => !prev)} 
                className="block lg:hidden text-lg font-light text-blue-700 hover:text-blue-700" 
                variant="ghost">More Details</Button>  
                }
          </div>
          {isActive && 
          <section  className="border-t px-3 py-8 mt-10 text-base text-gray-400 font-[300]">
            <div className="mb-8">
                <h1 className="text-lg text-gray-700 font-medium mb-2">About the role:</h1>
                <p>As a Senior Web Developer, you will play a crucial role in designing, developing, and maintaining high-quality web applications and websites. You will be responsible for implementing innovative solutions, leading development projects, and collaborating with cross-functional teams to deliver exceptional user experiences.
                </p>
            </div>
            <div className="mb-8">
                <h1 className="text-lg text-gray-700 font-medium mb-2">Responsibilites:</h1>
                <ul className="list-disc px-6">
                    <li>Design, develop, and maintain responsive and scalable web applications using modern web technologies, frameworks, and programming languages</li>
                    <li> Lead and mentor a team of web developers, providing technical guidance, code reviews, and best practices to ensure the successful delivery of projects.</li>
                    <li>Collaborate with product managers, designers, and other stakeholders to gather requirements, define project scope, estimate timelines, and prioritize tasks. Actively participate in the entire software development life cycle.</li>
                    <li> Implement server-side logic, database integration, and API development to support front-end functionality and ensure robust and secure web applications.</li>
                </ul>
            </div>
            <div className="pb-8 border-b">
                <h1 className="text-lg text-gray-700 font-medium mb-2">Our Ideal candidate :</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quis dolorum sit consequuntur eveniet! Dolore assumenda cum eum quod architecto ipsa quidem quibusdam obcaecati, necessitatibus, ratione, asperiores sit. Inventore voluptatum porro, natus eaque rem amet ab distinctio placeat nam adipisci ex dignissimos sed. Vero aliquam dignissimos sapiente tempore reiciendis id.</p>
            </div>
            <div className="h-16 w-full flex items-end justify-end gap-4">
                <Button onClick={()=> {}}
                className="flex gap-1 items-center text-xl font-light text-blue-500 hover:text-blue-700 hover:border-blue-700" variant="outline">
                    <p>save</p> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
                </Button>
                <Button onClick={()=> {}}
                className="text-blue-500 text-xl font-light hover:text-blue-700 hover:border-blue-700" variant="outline">
                    Apply Now
                </Button>
            </div>
          </section>
          }
          
        </div>
    );
}