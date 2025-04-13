'use client'
import { getAllTodos } from '@/library';
import React, { useEffect } from 'react'
import TodoCard from './TodoCard';
import { useDispatch, useSelector } from 'react-redux';

export default function TodosListing() {
  const dispatch = useDispatch();

  useEffect(()=>{
    getAllTodos(dispatch);
  },[])
  const allTodos = useSelector(store=>store.todos);
  return (
    <div className='flex flex-col gap-y-5 w-full'>
      {allTodos.length===0?
                 <p>No TODO add yet</p>
                :<>
             {allTodos.map(todo=>(
              <TodoCard key={todo._id} todo={todo} />
             ))}
                </>}
    </div>
  )
}
