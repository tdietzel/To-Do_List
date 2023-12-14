import { useSelector, useDispatch } from "react-redux"
import { toDoSelector, toggleToDo, deleteToDo } from "../redux/toDoSlice"
import NewToDoForm from "./NewToDoForm"

function App() {
  const toDos = useSelector(toDoSelector);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Make your to-do list!</h1>
      <ul>
        {toDos.map((todo) => (
          <li key={todo.id}>
            <span style={{textDecoration: todo.complete ? 'line-through' : 'none'}} onClick={() => dispatch(toggleToDo(todo.id))}>
              {todo.text}
              <button onClick={() => dispatch(deleteToDo(todo.id))}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
      <NewToDoForm />
    </>
  )
}

export default App;