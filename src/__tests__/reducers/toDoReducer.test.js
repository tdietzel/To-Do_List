import toDoReducer, { addToDo, toggleToDo, deleteToDo } from '../../redux/toDoSlice'
import { expect, describe, test } from "vitest";

describe('toDoSlice', () => {
  test('add a list item to the to-do list', () => {
    const initialState = [];
    expect(toDoReducer(initialState, addToDo({id: 'asd1', text: 'make breakfast', complete: false}))).toEqual([{id: 'asd1', text: 'make breakfast', complete: false}]);
  });
  test('cross out a list item on the to-do list', () => {
    const initialState = [{id: 'asd1', text: 'make breakfast', complete: false}]
    expect(toDoReducer(initialState, toggleToDo('asd1'))).toEqual([{id: 'asd1', text: 'make breakfast', complete: true}]);
  });
  test('delete a list item on the to-do list', () => {
    const initialState = [{id: 'asd1', text: 'make breakfast', complete: false}, {id: '123aa', text: 'eat lunch', complete: false}]
    expect(toDoReducer(initialState, deleteToDo('asd1'))).toEqual([{id: '123aa', text: 'eat lunch', complete: false}]);
  });
});