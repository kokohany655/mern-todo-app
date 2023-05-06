const {Router} = require("express")
const { getTodos, createTodo, updateTodo, deleteTodo } = require("../controller/todoController")

const todo= Router()

todo.route('/')
.get(getTodos)
.post(createTodo)



todo.route('/:id')
.delete(deleteTodo)
.put(updateTodo)

 module.exports = todo