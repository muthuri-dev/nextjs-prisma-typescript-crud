import { prisma } from "./prismaClient";

export async function queryData() {
  try {
    // const queryOutput = await prisma.users.findMany({
    //   // select: {
    //   //   firstName: true,
    //   // },
    //   // where: {
    //   //   firstName: "kennedy",
    //   // },
    //   // include: {
    //   //   todo: {
    //   //     include: {
    //   //       tag: true,
    //   //     },
    //   //   },
    //   // },
    //   select:{
    //     firstName:true,
    //     lastName:true
    //   },
    //   // where:{
    //   //   firstName:{
    //   //     startsWith:'d'
    //   //   }
    //   // }
    //   where:{
    //     NOT:[{
    //       firstName:{startsWith:'d'},
    //       // lastName:{startsWith:'k'},
    //       validated:true
    //     }]
    //   }
    // });
    // const queryOutput = await prisma.users.findUnique({
    //   where: {
    //     id: "25b80e28-7106-4c3e-80e4-fcf663577b1d",
    //   },
    // });
    // const queryOutput = await prisma.users.groupBy({
    //   by:['validated'],
    //   _count:true,
    // });
    // const queryOutput = await prisma.users.count();

    // const queryOutput = await prisma.users.aggregate({
    //   _min: {
    //     createdAt: true,
    //   },
    //   // orderBy: {
    //   //   createdAt: "desc",
    //   // },
    //   _max: { createdAt: true },
    //   _count: { createdAt: true },
    // });
    var name:string ='john';
    const queryOutput = await prisma.users.findMany({
      where:{
        firstName:name
      }
    });
    return queryOutput;
  } catch (error) {
    console.log(error);
  } finally {
    prisma.$disconnect();
  }
}
