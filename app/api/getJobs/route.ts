import { NextResponse, NextRequest } from "next/server";
const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient()

export async function GET(){
    const jobs = await prisma.Job.findMany({
        include: {
            technologies: true,
            company: true
        },
        take: 10
    })
    
    return NextResponse.json({jobs})

}