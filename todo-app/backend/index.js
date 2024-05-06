//write basic express boilerplate code
//with express.json() middleware

const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;

//make sure all the post endpoints work.
//make sure it will be able to parse body if it a json body.
app.use(express.json()); 

//inputs- body{
//          title : string,
//          description : string,
//}

//to create a todo
app.post("/todo" , async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You sent the wrong inputs"
        })
        return;
    }
    //put the todo in mongoDB
    await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false
    })
    res.json({
        msg : "Todo created"
    })
})

//to get the list of all existing todos
app.get("/todos",async (req,res)=>{
    //getting all the todos from mongoDB
    const todos = await todo.find();

    res.json({
        todos
    })
})

//to mark a todo as completed
app.put("/completed", async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "You've sent the wrong id"
        })
        return;
    }
    //finding id and updating something the DB
    await todo.update({
        _id : req.body.id,
    },{
        completed : true
    })
    res.json({
        msg : "todo marked as completed"
    })
})

app.listen(port,()=>{
    console.log(`server is listening to port ${port}`)
})