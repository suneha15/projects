//creating the schema for DB

/*
* TODO {
    title : string,
    description : string,
    completed : boolean
}
*/
const mongoose = require("mongoose");
//mongodb+srv://suneha15:python%40123@cluster0.qz2qdpw.mongodb.net/
//.env
// in a professional project you would put this in a .env file
mongoose.connect("mongodb+srv://suneha15:python%40123@cluster0.qz2qdpw.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos',todoSchema);

module.exports = {
    todo : todo
}