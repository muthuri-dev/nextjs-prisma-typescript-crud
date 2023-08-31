import { prisma } from "./prismaClient";

export async function createUser() {
  try {
    const user = await prisma.users.create({
      data: {
        firstName: "next",
        lastName: "java",
        validated: true,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}

export async function createUsers() {
  const usersData = [
    {
      firstName: "david",
      lastName: "mogambi",
      validated: false,
    },
    {
      firstName: "john",
      lastName: "danies",
      validated: true,
    },
  ];
  try {
    const user = await prisma.users.createMany({
      data: usersData,
    });
    return user.count;
  } catch (error) {
    console.log(error);
  }
}

export async function createUserWithTodo() {
  try {
    const results = await prisma.users.create({
      data: {
        firstName: "damah",
        lastName: "muthuri",
        validated: false,
        todo: {
          create: [
            {
              todoText: "learn next js witth prisma",
              isCompleted: true,
            },
          ],
        },
      },
      include: {
        todo: true,
      },
    });
    return results;
  } catch (error) {
    console.log(error);
  }
}
