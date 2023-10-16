const express= require('express')
const app=express()
const router=require('./routes/routes')
const path = require('path');
const db = require('./models/connection');

app.use('/',router)
app.listen('8000',err=>{
    if(err){
        console.log(err);
    }
    console.log('server is started at port 8000...');
})

db.mongoconnect()
// db.mongoconnect().then(console.log).catch(console.error)
// async function test(){
//     const insertResult = await db.get().insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
//     console.log('Inserted documents =>', insertResult);
// }
// test()
// console.log(db.get())