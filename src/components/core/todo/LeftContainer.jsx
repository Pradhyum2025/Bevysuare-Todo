'use client'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'
import NewTodoBtn from './NewTodoBtn';
import TodosListing from './TodosListing';

export default function LeftContainer() {
  const pathName = usePathname();
  return (
    <section className={`w-[100%] sm:w-[40%] h-[100vh]  p-4 lg:px-10  flex-col gap-5 ${pathName!=='/'?'hidden sm:flex ':'flex'} `}>

      {/* Btn and Search */}
      <NewTodoBtn />
      {/* All todo Lists */}
      <TodosListing />

    </section>
  )
}
