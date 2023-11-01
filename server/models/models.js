const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    task:String,
    completed:Boolean
})
const Task = mongoose.model('tasks',TaskSchema)
module.exports=Task