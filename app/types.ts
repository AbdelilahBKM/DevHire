export interface JobData {
    _id: string;
    position: string;
    role: string;
    level: string;
    location: string;
    contractType: string;
    technologies: string[];
    company: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface CompanyData {
    _id: string;
    name: string;
    logo?: string | null;
    location: string;
    adress?: string | null;
    city?: string | null;
    website?: string | null;
    phone_number: string;
    createdAt: Date;
    updatedAt: Date;
    jobs: string[];
}

export type User = {
    _id: string;
    username: string;
    email: string;
    password: string;
    fullname: string;
    phone_number: string;
    avatar?: string | null;
    resume: string;
    saved_job: Job[];
    createdAt: Date;
    updatedAt: Date;
}

export type Technology = {
    _id: string;
    name: string;
    value: string;
}

export type Job = {
    _id: string;
    position: string;
    role: string;
    level: string;
    location: string;
    contractType: string;
    technologies: Technology[];
    company: CompanyData;
    createdAt: Date;
    updatedAt: Date;
}

export type Company = {
    _id: string;
    name: string;
    logo?: string | null;
    location: string;
    adress?: string | null;
    city?: string | null;
    website?: string | null;
    phone_number: string;
    createdAt: Date;
    updatedAt: Date;
    jobs: Job[];
}