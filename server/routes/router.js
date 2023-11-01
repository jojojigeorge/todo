const express = require('express')
const TaskModel = require('../models/models')
const router = express.Router()

router.get('/', (req, res) => {
    TaskModel.find({})
    .then(result=>res.json(result))
    .catch(err=>res.json(err));
})
router.post('/',(req,res)=>{
    const task = req.body
    TaskModel.create(task)
    .then(result=>{
        res.json(result)
    })
    .catch(err=>res.json(err))
})

// toggle task completed boolean
router.put('/:id',(req,res)=>{
    const {id}=req.params
    TaskModel.findOneAndUpdate({_id:id},[{ $set: { completed: { $not: "$completed" } } }], {returnDocument: 'after'} )
    .then(result=>{
        res.json(result)
    })
    .catch(err=>res.json(err))
})
// update task 
router.put('/',(req,res)=>{
    const task = req.body
    TaskModel.findOneAndUpdate({_id:task.id},[{ $set: { task: task.task } }], {returnDocument: 'after'} )
    .then(result=>{
        res.json(result)
    })
    .catch(err=>res.json(err))
})

router.delete('/:id',(req,res)=>{
    const {id}=req.params
    TaskModel.findByIdAndDelete({_id:id})
    .then(result=>{
        res.json(result)})
    .catch(err=>res.json(err))
})
module.exports = router