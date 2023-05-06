import axios from 'axios'

const baseUrl  = "http://localhost:8000/v1/todo"

export const getAllTodo = async(setTodo)=>{
    const {data} =await axios.get(baseUrl)
    setTodo(data.todo)
}

export const addTodo = async(text, setText , setTodo)=>{
    await axios.post(baseUrl, {text})
    setText('')
    getAllTodo(setTodo)
}

export const updateTodo = async(_id , isActive ,text , setText, setTodo , setIsUpdating )=>{
    await axios.put(`${baseUrl}/${_id}`, {text ,isActive})
    setText('')
    setIsUpdating(false)
    getAllTodo(setTodo)
}

export const deleteTodo = async(_id , setTodo)=>{
    await axios.delete(`${baseUrl}/${_id}`)
    getAllTodo(setTodo)
}