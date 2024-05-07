//the component that will render all your todos (put them on the DOM)

/*todos  = [{
    title : "gym",
    decription : "go to gym"
}]
*/

export function Todos({todos}){
    return (
        // iterate over every todo and map it to this specific div
        <div>
            {todos.map(function(todo){
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed === true ? "completed" : "Mark as complete"}</button>
                </div>
            })}
        </div>
    );
}