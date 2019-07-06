import * as types from './../types';

export const addTodos = value => ({
  type: types.ADD_TODO,
  payload: value
});