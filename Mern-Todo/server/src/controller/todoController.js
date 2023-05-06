const Todo = require("../model/todoModel");
const asyncHandler = require('express-async-handler')



exports.getTodos = asyncHandler(async(req,res)=>{
    const todo = await Todo.find()
    res.status(200).json({todo})
})


exports.createTodo = asyncHandler(async(req,res)=>{
    
    const todo = new Todo(req.body)
    await todo.save()
    res.status(201).json({todo , message:"Created Successfully"})
})

exports.updateTodo = asyncHandler(async(req,res)=>{
    const {id} = req.params
    const existTodo = await Todo.findById(id)
    if(!existTodo){
        res.status(404).json({message:"not found this todo with this id"})
    }

    const todo = await Todo.findByIdAndUpdate({_id :id}, req.body , {new:true})
    res.status(200).json({todo, message:"Updataed Successfully"})
})

exports.deleteTodo = asyncHandler(async(req,res)=>{
    const {id} = req.params
    const todo = await Todo.findByIdAndDelete({_id:id})
    res.status(200).json({todo, message:"Deleted Successfully"})
})
