import express from 'express'
import { createTodo,getSingleTodo, deleteTodo, getAllTodos, updateTodo } from '../controllers/todoController.js';
const todoRoutes = express.Router();

//Get all todos
todoRoutes.get('/',getAllTodos);

//Get all todos
todoRoutes.get('/:todo_Id',getSingleTodo);


//Create new todo
todoRoutes.post('/',createTodo);

//UPDATE todo
todoRoutes.patch('/:todo_Id',updateTodo);

//Delete Todo
todoRoutes.delete('/:todo_Id',deleteTodo);

export default todoRoutes;