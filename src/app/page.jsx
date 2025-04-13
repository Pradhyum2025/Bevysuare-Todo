'use client'

import NewTodoBtn from "@/components/core/todo/NewTodoBtn";
import NoteEditor from "@/components/core/todo/NoteEditer";
import TodosListing from "@/components/core/todo/TodosListing";
import { useState } from "react";

export default  function Home({children}) {
  return (
   <div>
    {children}
   </div>
  );
}
