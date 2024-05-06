const zod = require("zod");

/*  for creating a todo
    {
        title : string,
        description : string
    }

    to mark a todo as complete we'll require its id from DB
    {
        id : string
    }
*/

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

const updateTodo = zod.object({
    id : zod.string();
})