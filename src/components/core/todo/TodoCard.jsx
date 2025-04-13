'use client'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { formatDate } from '@/library'
import { useParams } from 'next/navigation'
export default function TodoCard({ todo }) {
  const params = useParams()
  const descRef = useRef(null)
 
  useEffect(()=>{
    descRef.current.innerHTML = (((todo?.description && todo.description.length>40)?todo.description?.substring(0,30):todo.description) || 'Write todo description');
  },[todo])
  
  return (
    <Link href={'/' + todo._id} className={`rounded border-2  ${params.todo_Id===todo._id?' border-gray-400 shadow-md ':'border-white'}`}>
      <div
        className='bg-white p-3 rounded shadow-md'>
          {/* Title */}
        <h1
          className='font-popins text-lg font-bold text-gray-900 p-1'>
          {todo?.title || `Todo${todo._id.substring(0,5)}`}</h1>

        <div
          className='flex justify-between p-1 items-center   w-full'>

          {/* Description */}
          <div className='flex w-[60%]'>
          <p
            ref={descRef}
            className='font-popins text-md font-[100] text-[#000000CC]' >
          </p>
         
          </div>
          
          <p
           className='font-popins text-[14px] font-[500] w-[30%]  text-right text-[#00000080]'>
            {todo.createdAt && formatDate(todo.createdAt)}
          </p>

        </div>
      </div>
    </Link>
  )
}
