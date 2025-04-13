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
      <div className='rounded sm:hidden max-w-4xl mx-auto relative'>
        <Link href={'/'}>
          <button className=" w-[100px] h-[48px]  text-gray-900 flex items-center gap-[8px] justify-center cursor-pointer">
            <BiArrowBack className='text-gray-900 font-[800] hover:-translate-x-[5px] duration-200 delay-10' />
            <span className='font-[600] text-lg'>
              Back
            </span>
          </button>
        </Link>
      </div>

      <NoteEditor todo={singleTodo} />
    </>
  )
}
