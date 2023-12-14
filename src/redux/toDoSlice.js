import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const toDoSlice = createSlice ({
  name: 'toDo',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.push(action.payload)
    },
    toggleToDo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.complete = !todo.complete
    },
    deleteToDo: (state, action) => {
      return state.filter((todo) => action.payload !== todo.id)
    }
  }
});

export default toDoSlice.reducer;
export const { addToDo, toggleToDo, deleteToDo } = toDoSlice.actions;
export const toDoSelector = (state) => state.toDo;