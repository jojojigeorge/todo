const { MongoClient } = require('mongodb');
const url = "mongodb+srv://username:username@cluster101.0ktl0i6.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url);
const dbName = 'mongodb-todo-mern';
var state 
// module.exports.mongoconnect=async function(){

//     await client.connect();
//     console.log('Connected successfully to server');
//     const db = client.db(dbName);
//     const collection = db.collection('tasks');
//     return 'done'
// }
// module.exports.get = function () {
// 	return state.db;
// };



module.exports.mongoconnect = function () {

    async function main() {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('tasks');
		state= collection;
        // console.log(collection);


        // the following code examples can be pasted here...
        // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
        // console.log('Inserted documents =>', insertResult);
        return collection
    }

    main()
        .then((col)=>{
            // state=col
            // console.log
        })
        .catch(console.error)
        // .finally(() => client.close());

}
module.exports.getCollection = function () {
    // console.log('state:-------------------',state)
	return state;
};

