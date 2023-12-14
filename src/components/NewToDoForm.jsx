import { useDispatch } from 'react-redux'
import { addToDo } from '../redux/toDoSlice'
import { v4 } from 'uuid'

export default function NewToDoForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo({
      // payload passed through
      id: v4(),
      text: e.target.toDoText.value,
      complete: false
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="toDoText"></input>
      <button type="submit">Add To-Do</button>
    </form>
  );
}