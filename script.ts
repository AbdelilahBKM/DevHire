const {PrismaClient} = require("@prisma/client")
const { faker } = require('@faker-js/faker')
const prisma = new PrismaClient()
// import { jobProps } from "./app/types"

async function getData() {
  // *******
  // **********
  // ************
  // ***************
  // make sure to run the json-server first you dumbass
  // ***************
  // ************
  // **********
  // *******


    const data = await fetch('http://localhost:8000/job-lists')
    const res = await data.json()
    return res
  }

async function main() {
  const jobdata = await getData()

  console.log(jobdata)
  console.log(faker.internet.url(), faker.phone.number())

  for(const job of jobdata){
    const createdCompany = await prisma.Company.create({
      data: {
        name: job.company,
        logo: job.logo,
        location: job.companyLocation,
        adress: job.adress,
        city: job.adress,
        website: faker.internet.url(),
        phone_number: faker.phone.number(),
      }
    })
    const createdJob = await prisma.Job.create({
      data: {
        position: job.position,
        role: job.role,
        level: job.level,
        location: job.jobLocation,
        contractType: job.contract,
        company: {
          connect: {
            id: createdCompany.id
          }
        }
      }
    })
    for(const tech of job.technologies){
      const result = await prisma.Technology.findFirst({
        where: {
          name: tech.name,
          value: tech.value,
        }
      })

      if(result){
        await prisma.job.update({
          where: {
            id: createdJob.id
          },
          data: {
            technologies: {
              connect: {
                id: result.id
              }
            }
          }
        })
      } else {
        const newTech = await prisma.Technology.create({
          data: {
            name: tech.name,
            value: tech.value
          }
        })
        await prisma.job.update({
          where: {
            id: createdJob.id
          },
          data: {
            technologies: {
              connect: {
                id: newTech.id
              }
            }
          }
        })

      }
    }    
  }
}

  
  main()
    .then(async () => {
      console.log("success");
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })