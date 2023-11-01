const mongoose = require('mongoose')
const url = "mongodb+srv://username:username@cluster101.0ktl0i6.mongodb.net/mongodb-todo-mern?retryWrites=true&w=majority"


module.exports =  mongoose.connect(url)
.then(() => console.log('Connected!'))
.catch((err)=>console.log(err));


