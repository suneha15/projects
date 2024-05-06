//write basic express boilerplate code
//with express.json() middleware

const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

//to create a todo
app.post("/todo",(req,res){

})

//to get the list of all existing todos
app.get("/todos",(req,res){

})

//to mark a todo as completed
app.put("/completed",(req,res){

})

app.listen(port,(){
    console.log(`server is listening to port ${port}`)
})