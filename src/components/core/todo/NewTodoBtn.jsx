'use client'
import { createNewTodo } from '@/library';
import { useRouter } from 'next/navigation';
import React from 'react'
import { CgFileAdd } from 'react-icons/cg'
import { GoSearch } from 'react-icons/go'
import { useDispatch } from 'react-redux';

export default function NewTodoBtn() {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleCreateNewTodo = async()=>{
    return await createNewTodo(dispatch,router);
   }
  return (
    <div

    // Create new todo
      className="flex justify-between items-center w-full" >
      <button
      onClick={handleCreateNewTodo}
       className="bg-gray-900 w-[100px] h-[48px] rounded-[8px] text-white flex items-center gap-[8px] justify-center cursor-pointer">
        <CgFileAdd className="w-[20px] h-[20px]" />
        <span>
          TODO
        </span>
      </button>

      {/* serach */}
      <button className="w-[56px] h-[48px] rounded-[8px] bg-[#FFFFFF] flex items-center justify-center ">
        <GoSearch className="w-[24px] h-[24px] cursor-pointer" />
      </button>

    </div>
  )
}
