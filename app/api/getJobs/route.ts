// import { NextResponse } from "next/server"
// import {PrismaClient} from "@prisma/client"

// const prisma = new PrismaClient()

// export async function GET(){
//     try{

//         const jobs = await prisma.job.findMany({
//             include: {
//                 technologies: true,
//                 company: true
//             },
//             take: 10
//         })
//         return NextResponse.json({jobs})

//     } catch( err ){
//         console.log(err)
//         return NextResponse.error()
//     } finally{
//         await prisma.$disconnect()
//     }
// }