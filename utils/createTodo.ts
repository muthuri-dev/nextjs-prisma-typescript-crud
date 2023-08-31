import { prisma } from "./prismaClient";

export async function createTodo() {
  try {
    const user = await prisma.todos.create({
      data: {
        todoText: "visit havard of kenya",
        isCompleted: false,
        userId: "7bf41520-5bfa-434e-be93-2cecb993d747",
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
}
