const express=require('express')
const router=express.Router()
var helper = require('../helper/helper')



router.get('/',async(req,res)=>{
    let task = await helper.getAllTasks()

    // helper.getAllTasks()
    res.send('hello world')
})
router.get('/addtask',(req,res)=>{
    helper.addTask({a:'god',b:'is love'})
    res.send('task added')
})
module.exports=router