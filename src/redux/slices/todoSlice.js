import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const todoSlice = createSlice({
  name:'todos',
  initialState:[],
  reducers:{
    setTodosData:(state,action)=>{
      return [...action.payload]
    },
    addNewTodo :(state,action)=>{
      return [action.payload,...state]
    },
    updateSingleTodo:(state,action)=>{
      console.log(action)
      return state.map(todo=>{
        if(todo._id===action.payload._id){
          return action.payload;
        }else{
          return todo;
        }
      })
    },
    deleteTodo:(state,action)=>{
      console.log(action)
      const id = action.payload;
      return state.filter(todo=>todo._id!==id);
    }
  }
})

export default todoSlice;
export const todoSliceAction = todoSlice.actions;