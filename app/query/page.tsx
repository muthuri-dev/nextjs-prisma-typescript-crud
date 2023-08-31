import { createTodo } from "@/utils/createTodo";
import { createUserWithTodo, createUsers } from "@/utils/createUser";
// import { queryData } from "@/utils/getQueryOutput";
import React from "react";

export default async function page() {
  // const queryOutPut = await queryData();
  // console.log(JSON.stringify(queryOutPut, null, 2));
  const user = await createTodo();
  console.log(JSON.stringify(user,null,2 ));
  return <div>page</div>;
}
