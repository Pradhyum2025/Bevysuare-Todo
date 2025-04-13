import NoteEditor from '@/components/core/todo/NoteEditer';
import { getSingleTodo } from '@/library';
import Link from 'next/link';
import React from 'react'
import { BiArrowBack } from "react-icons/bi";

export default async function todoDetailPage({ params }) {
  const todo_Id = params.todo_Id;
  const singleTodo = await getSingleTodo(todo_Id);
  return (
    <>
        <Link href={'/'} className='w-full mb-2 sm:hidden '>
          <button className="text-gray-900 flex items-center gap-[8px] justify-start cursor-pointer">
            <BiArrowBack className='text-gray-900 font-[800] hover:-translate-x-[5px] duration-200 delay-10' />
            <span className='font-[600] text-lg'>
              Back
            </span>
          </button>
        </Link>

      <NoteEditor todo={singleTodo} />
    </>
  )
}
