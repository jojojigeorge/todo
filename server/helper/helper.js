var db=require('../models/connection')
module.exports={
    addTask:(task)=>{
        // console.log(task);
        db.getCollection().insertOne(task).then((data)=>{
        // console.log('one task inserted to mongodb-----------------------------------'+data[0]);
        })
    },
    // getAllCategories:(adminId)=>{
    //     return new Promise(async(resolve, reject) => {
    //         let cat =await db.get().collection(collection.CATEGORY_COLLECTION).find({ adminId: adminId }).toArray()
    //         resolve(cat)
    //     })
    // },
    getAllTasks:()=>{
        return new Promise(async(resolve, reject) => {
            let alltasks =await db.getCollection().find({}).toArray()
            console.log(alltasks);
            // console.log(db.get.);
            resolve(alltasks)
        })
    },
}