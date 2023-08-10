export type jobProps = {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    jobLocation: string;
    companyLocation: string;
    adress: string;
    city: string;
    technologies: {
        name: string, 
        value: string
    }[];
  
}