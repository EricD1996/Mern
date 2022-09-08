const Todo = (props) => {
    return <div>
        <span>{props.todo.text}</span>
        <input onChange={(event) => {props.handleToggleComplete(props.i)}} checked={props.todo.complete} type="checkbox" />
        <button onClick={(event) => {props.handleTodoDelete(props.i);}}>Delete</button>
    </div>
}

export default Todo;