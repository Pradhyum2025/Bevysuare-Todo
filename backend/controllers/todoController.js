import { Todo } from "../models/todo.js";


//Create new todo controller function
export const getAllTodos = async(req,res)=>{
  try{
    // console.log('Hello I am Get All Todos')
    const allTodos = await Todo.find();
    
    return  res.status(200).json({
      success:true,
      message:'Get All Todos successfully',
      allTodos 
    })

  }catch(error){
    console.log('Get All Todo Error :',error?.message)
    return res.status(500).json({
      success:false,
      message:'Internal Server Error'
    })
  }
}

//Create new todo controller function
export const getSingleTodo = async(req,res)=>{
  try{
    const {todo_Id } = req.params;

    if(!todo_Id){
      return res.status(401).json({
        success:false,
        message:'Params as Todo ID is required'
      })
    }
    const singleTodo = await Todo.findById(todo_Id);
    
    return  res.status(200).json({
      success:true,
      message:'Get Single Todos successfully',
      singleTodo 
    })

  }catch(error){
    console.log('Get Single Todo Error :',error?.message)
    return res.status(500).json({
      success:false,
      message:'Internal Server Error'
    })
  }
}

//Create new todo controller function
export const createTodo = async(req,res)=>{
  try{
    let newTodo = new Todo({
      description :""
    })

    newTodo = await newTodo.save();

    return  res.status(200).json({
      success:true,
      message:'New Todo Create successfully',
      newTodo 
    })

  }catch(error){
    console.log('Create Todo Error :',error?.message)
    return res.status(500).json({
      success:false,
      message:'Internal Server Error'
    })
  }
}

//Update todo controller function
export const updateTodo = async(req,res)=>{
  try{
    const {title,description}= req.body;
   const {todo_Id } = req.params;

    if(!title || !description || !todo_Id){
      return res.status(401).json({
        success:false,
        message:'Title, description are required'
      })
    }
    if(!todo_Id){
      return res.status(401).json({
        success:false,
        message:'Params as Todo ID is required'
      })
    }

    let currTodo = await Todo.findById(todo_Id);
    if(!currTodo){
      return res.status(401).json({
        success:false,
        message:'Todo Not Found'
      })
    }

    const updatedTodo = await Todo.findByIdAndUpdate(todo_Id,
      {title,description},{new:true})

    return  res.status(200).json({
      success:true,
      message:'Todo Updated successfully',
      updatedTodo 
    })

  }catch(error){
    console.log('Todo Update Error :',error?.message)
    return res.status(500).json({
      success:false,
      message:'Internal Server Error'
    })
  }
}

//Update todo controller function
export const deleteTodo = async(req,res)=>{
  try{
   const {todo_Id } = req.params;
    if(!todo_Id){
      return res.status(401).json({
        success:false,
        message:'Params as Todo ID is required'
      })
    }
    let currTodo = await Todo.findById(todo_Id);
    if(!currTodo){
      return res.status(401).json({
        success:false,
        message:'Todo Not Found'
      })
    }

    await Todo.findByIdAndDelete(todo_Id);
    return  res.status(200).json({
      success:true,
      message:'Todo Deleted successfully',
    })

  }catch(error){
    console.log('Todo Deletion Error :',error?.message)
    return res.status(500).json({
      success:false,
      message:'Internal Server Error'
    })
  }
}