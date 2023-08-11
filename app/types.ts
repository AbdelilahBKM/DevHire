export type User = {
    id: string;
    username: string;
    email: string;
    password: string;
    fullname: string;
    phone_number: string;
    avatar?: string | null;
    resume: string;
    saved_job: Job[];
    applied_job: Applied[];
    createdAt: Date;
    updatedAt: Date;
}

export type Technology = {
    id: string;
    name: string;
    value: string;
    jobs: Job[];
}

export type Job = {
    id: string;
    position: string;
    role: string;
    level: string;
    location: string;
    contractType: string;
    technologies: Technology[];
    saved_users: User[];
    applied_users: Applied[];
    company: Company;
    companyId: string;
    createdAt: Date;
    updatedAt: Date;
}

export type Applied = {
    user_id: String;
    job_id: string;
    application_date: Date;

}

export type Company = {
    id: string;
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