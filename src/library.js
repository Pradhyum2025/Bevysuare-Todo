import toast from "react-hot-toast";
import axiosInstance from "./helper/axiosInstance";
import { todoSliceAction } from "./redux/slices/todoSlice";

export const  getAllTodos = async(dispatch)=>{
  try {
    const res = await axiosInstance.get('/api/v1/todo');
    console.log("GET All RESPONSE --->>>", res.data)
    if (res.data && res.data.success) {
      dispatch(todoSliceAction.setTodosData(res.data.allTodos));
    }
  } catch (error) {
    toast.error(error?.response?.data?.message, { position: 'right-bottom', duration: 2000 });
    console.log('GET All ERROR : ', error?.message)
    new Error(error?.response?.data?.message || 'Unknown Error Occured While Fetching AllTodos')
  }
}

export const  createNewTodo = async(dispatch,router)=>{
  try {
    const res = await axiosInstance.post('/api/v1/todo');
    console.log("CREATE NEW TODO RESPONSE --->>>", res.data)
    if (res.data && res.data.success) {
      dispatch(todoSliceAction.addNewTodo(res.data.newTodo));
      router.push(`/${res.data.newTodo._id}`)
    }
  } catch (error) {
    toast.error(error?.response?.data?.message, { position: 'right-bottom', duration: 2000 });
    console.log('CREATE NEW TODO ERROR : ', error?.message)
    new Error(error?.response?.data?.message || 'Unknown Error Occured While Fetching AllTodos')
  }
}

export const  updateTodo = async(dispatch,router,todoId,setSaving,todoData)=>{
  try {
    setSaving(()=>true)
    const res = await axiosInstance.patch(`/api/v1/todo/${todoId}`,todoData);
    console.log("UPDATE TODO RESPONSE --->>>", res.data)
    setSaving(()=>false)
    if (res.data && res.data.success) {
      dispatch(todoSliceAction.updateSingleTodo(res.data.updatedTodo
      ));
    }
  } catch (error) {
    setSaving(()=>false)
    toast.error(error?.response?.data?.message, { position: 'right-bottom', duration: 2000 });
    console.log('UPDATE TODO ERROR : ', error?.message)
    new Error(error?.response?.data?.message || 'Unknown Error Occured While Fetching AllTodos')
  }
}

export const  deleteTodo = async(dispatch,Router,todo_id)=>{
  try {
    const res = await axiosInstance.delete(`/api/v1/todo/${todo_id}`);
    // console.log("DELETE TODO RESPONSE --->>>", res.data)
    if (res.data && res.data.success) {
      dispatch(todoSliceAction.deleteTodo(todo_id));
      Router.push('/')
    }
  } catch (error) {
    toast.error(error?.response?.data?.message, { position: 'right-bottom', duration: 2000 });
    console.log('CREATE NEW TODO ERROR : ', error?.message)
    new Error(error?.response?.data?.message || 'Unknown Error Occured While Fetching AllTodos')
  }
}

export const  getSingleTodo = async(todo_id)=>{
  try {
    const res = await axiosInstance.get(`/api/v1/todo/${todo_id}`);
    // console.log("GET SINGLE TODO RESPONSE --->>>", res.data)
    if (res.data && res.data.success) {
      return res.data.singleTodo;
    }
  } catch (error) {
    toast.error(error?.response?.data?.message, { position: 'right-bottom', duration: 2000 });
    console.log('CREATE NEW TODO ERROR : ', error?.message)
    new Error(error?.response?.data?.message || 'Unknown Error Occured While Fetching AllTodos')
  }
}

export function formatDate(isoString) {
  const date = new Date(isoString);
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}