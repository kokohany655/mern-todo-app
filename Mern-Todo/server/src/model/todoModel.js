const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
    {
        text:{
            type:String,
            require:true
        },
        isActive:{
            type:Boolean,
            default:false
        }
    }
)

const Todo = mongoose.model("Todo" , todoSchema)

module.exports = Todo